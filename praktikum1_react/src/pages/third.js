import React from 'react'
import AlertProps from '../component/alert_props'

export default class Third extends React.Component{
    render(){
        return(
            <div className='container'>
                <AlertProps type="danger" title="Fatal Error">
                    Ini Alert tipe Danger
                </AlertProps>
                <AlertProps type="warning" title="Warning">
                    Ini alert tipe Warning
                </AlertProps>
                <AlertProps type="success" title="Succesful">
                    Ini alert tipe Success
                </AlertProps>
            </div>
        )
    }
}