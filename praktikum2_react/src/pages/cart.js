import React from 'react'

export default class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            cart: [], //local
            user: "", //session
            total: 0 //dapat dari hasil perhitungan
        }
    }
    getUser = () => {
        let userName = sessionStorage.getItem("user")
        this.setState({
            user: userName
        })
    }
    getCart = () => {
        let tempCart =[]
        let totalHarga = 0
        if(localStorage.getItem("cart")!== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        tempCart.map(item => {
            totalHarga =+ (item.harga + item.jumlahBeli)
        })
        this.setState({
            cart: tempCart,
            total: totalHarga
        })
    }
    componentDidMount = () => {
        this.getUser(),
        this.getCart()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}