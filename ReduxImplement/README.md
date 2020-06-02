# Redux Implementation on React

In this section I will put the record of how to implement redux into my react project.

At first, I try to google it and found a good resource about this section.

here is the link: https://medium.com/@paulfitzgerald_11524/quick-and-easy-guide-to-implementing-redux-in-a-react-app-5072e3a81b7a

I am following that link and writing it in my own short way.

Things we need to do at first.

1. install `redux` and `react-redux`
2. create a `reducer`
3. create a `store` passing in this `reducer`.
4. wrap your app in a `Provider` passing in the store.
5. create a `mapStateToProps` function
6. create a `mapDispatchToProps` function (if you wish to update the state)
7. connect your app to the redux store

Process:

1. write command
`npm install --save redux react-redux`

so after installing this we will see that our `redux` and `react-redux` package are added to the `package.json` file.

2. Now making a folder called `Redux` in my projects `src` folder.

3. Into that Redux folder I need to make 3 more folder which is called `store`, `reducer`, `action`

Note: 

Actions are called in reducers example

cartAction.js

```js
export const getCartByUserId = () => dispatch => {
  let userId = Auth.getUserId()
  dispatch({
    type: GET_CART_BY_USERID_BEGIN
  })
  return serverCall({
    method: 'GET',
    url: `users/${userId}/cart`
  })
    .then(res => {
      dispatch({
        type: GET_CART_BY_USERID_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: GET_CART_BY_USERID_FAIL,
        payload: { error }
      })
      return error
    })
}

export const postCart = (productId, increase, decrease) => (dispatch) => {
  let userId = Auth.getUserId()
  dispatch({
    type: POST_CART_BEGIN
  })
  return serverCall({
    method: 'POST',
    url: `users/${userId}/cart`,
    data: {
      userId,
      productId,
      increase,
      decrease
    }
  })
    .then(res => {
      dispatch({
        type: POST_CART_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: POST_CART_FAIL,
        payload: { error }
      })
      return error
    })
}

export const POST_CART_BEGIN = 'POST_CART_BEGIN'
export const POST_CART_SUCCESS = 'POST_CART_SUCCESS'
export const POST_CART_FAIL = 'POST_CART_FAIL'

export const GET_CART_BY_USERID_BEGIN = 'GET_CART_BY_USERID_BEGIN'
export const GET_CART_BY_USERID_SUCCESS = 'GET_CART_BY_USERID_SUCCESS'
export const GET_CART_BY_USERID_FAIL = 'GET_CART_BY_USERID_FAIL'

```

cartReducer.js
```js
import {
  POST_CART_BEGIN,
  POST_CART_SUCCESS,
  POST_CART_FAIL,
  GET_CART_BY_USERID_BEGIN,
  GET_CART_BY_USERID_SUCCESS,
  GET_CART_BY_USERID_FAIL
} from '../action/cartAction'

const initialState = {
  cart: {},
  loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CART_BEGIN:
      return {
        ...state,
        loading: true,
        error: {}
      }
    case POST_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload.data.cart,
        loading: false
      }
    case POST_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    case GET_CART_BY_USERID_BEGIN:
      return {
        ...state,
        loading: true,
        error: {}
      }
    case GET_CART_BY_USERID_SUCCESS:
      return {
        ...state,
        cart: action.payload.data.cart,
        loading: false
      }
    case GET_CART_BY_USERID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}
```


All of the reducer should combine in One reducer called `index.js`

```js
import {combineReducers} from 'redux'


export default combineReducers({
  token,
  signin,
  department,
  product,
  variant,
  cart,
  checkout,
  filter
})

```

On the other hand, All of the reducers, middleware and state should be combine into store folder `index.js` file.

```js
import rootReducer from '../reducer'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const initialState={}
const middlewares=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

export default store
```

4. Now we need to combine our react project to Redux

5. For doing this we need to call `Provider` to our react project starting file `index.js` like this way.

```js
import {Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById(‘root’)
);

```

6. Now for accessing the redux state in a component we need to write a function called `mapStateToProps`.
 There is still one thing to do. we need to use react-redux’s `connect` method to connect our react and the redux store.

```js
import React from 'react'
import { connect } from "react-redux";
const App = (props) => {
   return <p>props.count</p>;
 
};
function mapStateToProps(state) {
   return {
     count: state
   };
 
}
export default connect(mapStateToProps)(App);

```

7. Finally, for updating the redux state or To fire actions we need to make another function called `mapDispatchToProps`
This will allow us to fire actions from our components and update the state.

```js
function mapDispatchToProps(dispatch) {
return {
   
   increment: () => dispatch({type: 'INCREMENT'}),
   decrement: () => dispatch({type: 'DECREMENT'})
 };
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

```
