import React from 'react'
import phone from '../assets/i.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/Cartslice'

const List = () => {
    const product = [
        {
            id:1,
            title:"OnePlus Nord CE6",
            img:"https://m.media-amazon.com/images/I/61EC3mmirsL._SX679_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
        {
            id:2,
            title:"OnePlus Nord CE6",
            img:"https://images-eu.ssl-images-amazon.com/images/I/618IOq-RikL._AC_UL165_SR165,165_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
        {
            id:3,
            title:"OnePlus Nord CE6",
            img:"https://images-eu.ssl-images-amazon.com/images/I/717z2bNF6DL._AC_UL165_SR165,165_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
        {
            id:4,
            title:"OnePlus Nord CE6",
            img:"https://images-eu.ssl-images-amazon.com/images/I/610fFRcR-+L._AC_UL165_SR165,165_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
        {
            id:5,
            title:"OnePlus Nord CE6",
            img:"https://images-eu.ssl-images-amazon.com/images/I/61F1NWYtCKL._AC_UL232_SR232,232_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
        {
            id:6,
            title:"OnePlus Nord CE6",
            img:"https://images-eu.ssl-images-amazon.com/images/I/61EC3mmirsL._AC_UL232_SR232,232_.jpg",
            price:30000,
            des:"Supercharged by Snapdragon 7s Gen 4 (Antutu 1.17 million+)"
        },
    ]

    const cartProduct = useSelector((state)=>state.cart.cartItems)

    const dispatch = useDispatch()

    const addCart = (item) =>{
        dispatch(addToCart(item))
    }
  return (
    <div>
        <img src={phone}></img>

        {product.map((prod)=>(
            <div key={prod.id}>
                <img src={prod.img} alt='phone'></img>
                <h4>{prod.title}</h4>
                <h6>₹{prod.price}</h6>
                <p>{prod.des}</p>
            </div>
        ))}
        <br></br>

        <section>
            <div className="container">
                <div className="row">
                    {product.map((item)=>(
                        <div className="col-lg-4" key={item.id}>
                            <div className="card">
                                <img src={item.img} alt="" width={100}></img>
                                <div className="card-body">
                                    <h4>{item.title}</h4>
                                    <h6>₹{item.price}</h6>
                                    <p>{item.des}</p>

                                    {/* redux process is done here when the cart product is find here we used to find the items and just matches the items id 
                                    if it is exist the button enabels and then we use terrinary operator like if thre cart is already exists product is not allowed to add same product */}
                                    {cartProduct.find((items)=>items.id === item.id)?
                                    <button disabled className='btn btn-danger'>Added to cart</button> :
                                    <button className='btn btn-danger' onClick={()=>addCart(item)}>Add to cart</button>}
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default List