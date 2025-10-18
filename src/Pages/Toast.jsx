import React, { useContext } from 'react'
import { ToastContext } from '../Context/ToastContext'
export default function Toast() {
    let{message,type,show,showToast,hideToast} =useContext(ToastContext)

    if(!show){
        return null
    }
    return (
       
        <div>
            <div className={type==="success"?"alert alert-success":"alert alert-danger"} role="alert">
                {message}
            </div>
            
        </div>
    )
}
