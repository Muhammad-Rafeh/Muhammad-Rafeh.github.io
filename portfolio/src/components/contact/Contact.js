import React from 'react'
import './contact.css'
import Earth from '../../images/earth.png'
const Contact = () => {
    return(
        <>
            <div className='contact-container justify-content-center d-flex'>
                <img className='contact-earth-image' src={Earth} />
                <div className='contact-heading'>
                    CONTACT
                </div>
                <div className='d-flex justify-content-center align-items-center contact-form-details-wrapper'>
                    <div className='contact-form-container d-flex flex-column'>
                        <div className='contact-form-title py-3 ps-4'>Reach by email</div>
                        <input className='mx-4 p-2 mt-4 mb-2 contact-form-email-subject' name="subject" placeholder="write subject" />
                        <textarea className='mx-4 contact-form-message' />
                        <button className='my-4 ms-4 py-2 contact-form-send-button' >Send</button>
                    </div>
                    <div className='contact-details-wrapper'>
                      <div className='contact-details-inner'>

                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact