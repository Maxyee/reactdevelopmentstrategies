# DECLARATIVE OVER IMPERATIVE STYLE

React embraces declarative style over imperative style. Declarative style means how developers write
how it should be, not what to do, step-by-step (imperative). But why is declarative style a better choice?
The benefit is that declarative style reduces complexity and makes code easier to read and understand.


examples are give below :

```js
/*--------Imperative way--------*/
var arrImperative = [1, 2, 3, 4, 5]
var arrImperative2 = []

for(var i=0; i<arrImperative.length; i++){
    arrImperative2[i] = arrImperative[i]*2
}
console.log('a', arrImperative2)


/*--------Declarative way--------*/
var arrDeclarative = [1, 2, 3, 4, 5]
var arrDeclarative2 = arrDeclarative.map(function(v,i){
    return v*2
})
console.log('b', arrDeclarative2)


/*--------Imperative way--------*/
var profile = {
    account: '45896245'
}

var profileDeep = {
    account: {
        number: 45896245
    }
}

var getNestedValueImperatively = function getNestedValueImperatively(object, propertyName){
    var currentObject = object
    var propertyNameList = propertyName.split('.')
    var maxNestedLevel = propertyNameList.length
    var currentNestedLevel

    for(currentNestedLevel = 0; currentNestedLevel < maxNestedLevel; currentNestedLevel++){
        if(!currentObject || typeof currentObject === 'undefined'){
            return undefined
        }
        currentObject = currentObject[propertyNameList[currentNestedLevel]]
    }
}

console.log(getNestedValueImperatively(profile, 'account') === 45896245)
console.log(getNestedValueImperatively(profileDeep, 'account.number') === 45896245)

/*--------Declarative way--------*/

var getValue = function getValue(object, propertyName){
    return typeof object === 'undefined' ? undefined : object[propertyName]
}

var getNestedValueDeclaratively = function getNestedValueDeclaratively(object, propertyName){
    return propertyName.split('.').reduce(getValue, object)
}

console.log(getNestedValueDeclaratively({bar: 'baz'}, 'bar') === 'baz')
console.log(getNestedValueDeclaratively({bar: {baz : 1}}, 'bar.baz') === 1)


```