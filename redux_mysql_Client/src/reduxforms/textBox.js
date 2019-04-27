import React from 'react';
const textBox = ({input,type,name,lbl,meta:{error,touched}})=>{
    //we are going to override type and name only lbl is my own key.. input have 100 properties
    return <div className='row form-group'>
            <div className="col-sm-5 text-right">
            {lbl}
            </div>
            <div className="col-sm-3">
            <input className='form-control' {...input} type={type}/>

            </div>
            <div className="col-sm-4">
            {
                touched && error && <span className='text-danger'>{error}</span>
            }
            </div>
        </div>
}

export default textBox;