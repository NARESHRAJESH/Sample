import {createSlice} from '@reduxjs/toolkit'

const storedItem = localStorage.getItem('cartItems')

const initialState = {
    'cartItems': storedItem ? JSON.parse(storedItem) : []
}

const Cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newProduct = action.payload
            const existProduct = state.cartItems.find((items)=>items.id === newProduct.id)
            if(existProduct){
            existProduct.quantity += newProduct.quantity
            }
            else{
                state.cartItems.push({
                    id:newProduct.id,
                    title:newProduct.title,
                    img:newProduct.img,
                    price:newProduct.price,
                    quantity:1
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))     
        }
    }
})

export default Cartslice.reducer

export const {addToCart} = Cartslice.actions
