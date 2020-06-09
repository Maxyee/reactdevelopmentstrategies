import react from 'react'
import propTypes from 'prop-types'


function CartItem(){
    return(
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs">X</button>
                <span className="cart-item_name">Cart Item Name</span>
            </div>
            <div className="cart-item_price">Price | Currency</div>
        </div>
    )
}

export default CartItem