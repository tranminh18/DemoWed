import axios from 'axios'
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,

    CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'


export const addToCart = (pk, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${pk}`)
    console.log('data=',data)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data[0].id,
            name: data[0].name,
            image: data[0].image,
            price: data[0].price,
            countInStock: data[0].countInStock, 
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) //save data from STATE REDUX in Local Storage
}



export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}

