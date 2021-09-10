import React from 'react'
import './Enquiry.css'
const Enquiry = () => {
    return (
        <>
            <div className='form-head'>
                <div className='registration_form'>
                    <div class="title">
                        Enquiry Form
                    </div>
                    <form name="my-form" action="#" method="get">
                        <div class="form-box">
                            <label HtmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your name" />
                        </div>
                        <div class="form-box">
                            <label for="Company Name">Company Name</label>
                            <input type="text" id="Company Name" name="Company Name" placeholder="Enter your company name" />
                        </div>
                        <div class="form-box">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="form-box">
                            <label for="numb">Contact Number</label>
                            <input type="tele" id="numb" name="number" placeholder="1234-45-678" required />
                        </div>
                        <div class="form-box">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Email" required />
                        </div>
                        <div class="form-box">
                            <label for="msg">Message</label>
                            <textarea id="msg" name="msg" rows="4" cols="50" />
                        </div>
                        <div class="form-box">
                            <button type='submit' className='btn' id="btnSend">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='enq-add'>
                <h2>Company Address</h2>
                <address className='enq-con'>
                    80,Venkateshwara Nagar,<br /><br />
                    Rajapalayam, Tamilnadu,<br /><br />
                    India.<br /><br />
                    Mail ID:  <a href="mailto:jp@kalanexports.com">jp@kalanexports.com</a> <br /><br />
                    Mobile Number: <a href="tel:+918148666282">8148666282</a><br />

                </address>
            </div>
        </>
    )
}

export default Enquiry
