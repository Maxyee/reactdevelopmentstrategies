import React from 'react'
import PropTypes from 'prop-types'

function Product(){
    
    handClick = () => {

    }
    
    return(
        <div>
            <div className="product thumbnail">
                <img src={image} alt="product"/>
                
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                        <button className="btn btn-danger">
                            Remove| Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;