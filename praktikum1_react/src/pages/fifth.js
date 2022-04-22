import React from "react";

export default class Fifth extends React.Component{
    constructor(){
        super()
        this.state = {
            nama : "Ariq",
            kelas : "XIR7"
        }
    }
    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div className = "container">
            <h3>Form Input</h3>
            <form>
                Input Nama
                <input name="nama" className="form-control" onChange={this.changeState}></input>
                Input Kelas
                <input name="kelas" className="form-control" onChange={this.changeState}></input>
            </form>
            <h3>Hasil Input</h3>
            <h5> Nama: {this.state.nama}</h5>
            <p>Kelas : {this.state.kelas}</p>
            </div>
        )
    }
}