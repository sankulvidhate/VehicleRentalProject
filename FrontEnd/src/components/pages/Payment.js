import { useState } from "react"
import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {

    const [cardDetails, setCardDetails] = useState('')
    const [cvv, setCvv] = useState('')
    const [upiID, setUpiId] = useState('')
    const [upiPin, setUpiPin] = useState('')
    const [dLExpiryDate, setLicensValidity] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [verified, setVerified] = useState(false)
    const [user, setUser] = useState({
        username: ""
    });

    const navigate = useNavigate()

    const booking = JSON.parse(sessionStorage.getItem('booking'))

    const bill = booking.totalpay

    const pay = () => {

        if (cardDetails.length !== 16) {
            toast.error('please enter valid Card Number')
        } else if (cvv.length !== 3) {
            toast.error('please enter valid CVV')
        } else {
            toast.success('Payment Successful')

            navigate("/feedback")

        } 

            

        }
    


    return (
        <div>
            <div style={{ marginTop: 100 }}>
                <div style={styles.container}>

                    <p>Amount Payable : <h5>Rs. {bill}</h5></p>

                    <hr></hr>


                    <div className='mb-3'>
                        <label>Enter card Details</label>
                        <input
                            onChange={(event) => {
                                setCardDetails(event.target.value)
                            }}
                            className='form-control'
                            type='text'
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Enter CVV</label>
                        <input
                            onChange={(event) => {
                                setCvv(event.target.value)
                            }}
                            className='form-control'
                            type='text'
                        />
                    </div>

                    <hr />


                    <h6>OR</h6>



                    <hr />



                    <div className='mb-3'>
                        <label>Enter UPI ID</label>
                        <input
                            onChange={(event) => {
                                setUpiId(event.target.value)
                            }}
                            className='form-control'
                            type='tel'
                        />
                    </div>

                    <div className='mb-3'>
                        <label>Enter UPI PIN </label>
                        <input
                            onChange={(event) => {
                                setUpiPin(event.target.value)
                            }}
                            className='form-control'
                            type='email'
                        />
                    </div>

                    <button onClick={pay} style={styles.signinButton} >
                        Pay Rs. {bill}
                    </button>

                </div>
            </div>
        </div>


    )
}

const styles = {
    container: {
        width: 400,
        padding: 20,
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        marginBottom: 100,
        borderColor: 'black',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        // boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signinButton: {
        position: 'relative',
        width: '100%',
        height: 40,
        backgroundColor: '#000000',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
    },
}

export default Payment
