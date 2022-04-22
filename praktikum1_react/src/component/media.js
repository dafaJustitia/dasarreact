import React from "react"

export default class Media extends React.Component{
    render(){
        return(
            <div className={'row alert alert-' + this.props.type}>
                <div className='col col-auto'>
                    <img src={process.env.PUBLIC_URL+'/asset/'+this.props.image}
                        className='mr3' width='100px' alt='media' />
                    </div>
                    <div className='col col-auto text-center'>
                        <h4 className='mt-0'>{this.props.title}</h4>
                        <p>{this.props.children}</p>
                    </div>
            </div>
        )
    }
}