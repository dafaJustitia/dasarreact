import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Alert from '../component/alert'
import First from './first'

export default class second extends React.Component{
    render(){
        return(
            <div className='container'>
                <Alert />
                <Alert />
                <First />
                <First />
            </div>
            )
        }
    }