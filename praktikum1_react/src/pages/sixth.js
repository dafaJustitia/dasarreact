import React from "react";
import AlertProps from "../component/alert_props";

export default class Sixth extends React.Component{
    constructor(){
        super()
        this.state = ({
            type: "success",
            title: "Alert with props and state",
            content: "This is Content"
        })
    }
    handelChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value    
        })
    }
    render(){
        return(
            <div className="container">
                <br/>
                <h5 className="text-center">Alert</h5>
                <AlertProps type={this.state.type} title={this.state.title}>
                    {this.state.content}
                </AlertProps>
                <hr/>
                <h5>Alert Control</h5>
                <select className = 'form-control' name = 'type' value = {this.state.type} onChange = {this.handelChange}>
                    <option value = "info">Info</option>
                    <option value = "danger">Danger</option>
                    <option value = "warning">Warning</option>
                    <option value = "success">Success</option>
                </select>
                <b>Alert Title</b>
                <input className = 'form-control' name = 'title' value = {this.state.title} onChange = {this.handelChange}></input>
                <b>Alert Content</b>
                <input className = 'form-control' name = 'content' value = {this.state.content} onChange = {this.handelChange}></input> 
            </div>
        )
    }
}