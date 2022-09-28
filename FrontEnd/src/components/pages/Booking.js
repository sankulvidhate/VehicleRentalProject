import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setBill } from '../Redux/actions/VehicleActions';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
    import imgg from '../../captcha/calPic.jpg'


const Booking = () => {
    // get user inputs

    const vehicles = useSelector((state) => state.vehicle)
    const { id, title, imagePath, rentPerDay, transmission, brand, model, fuel, categoryName, cappacity } = vehicles

    // const bill = useSelector((state) => state)
    const dispatch = useDispatch()

    const [pickupLocation, setPickupLocation] = useState('')
    const [pickupDate, setPickupDate] = useState('')
    const [returnLocation, setReturnLocation] = useState('')
    const [dropDate, setReturnDate] = useState('')

    // get the navigate function reference
    const navigate = useNavigate()

    const selVehicle = JSON.parse(sessionStorage.getItem("selVehicle"))
    const vehicle_Id = selVehicle.vehicle_id

    const seluser = JSON.parse(sessionStorage.getItem("user"))
    const user_Id = seluser.user_id

    console.log(vehicle_Id)
    console.log(user_Id)





    const signin = () => {

        const d1 = new Date()
        // check if user has really entered any value
        if (pickupDate.length === 0) {
            toast.error('Please enter Pickup Date')
        } else if (pickupDate < d1) {
            toast.error('Please enter Valid Pickup Date')
        } else if (dropDate.length === 0) {
            toast.error('Please enter Drop Date')
        } else if (new Date(dropDate) < pickupDate) {
            toast.error('Please enter valid Drop Date')
        } else {

            navigate(`/bill/${pickupDate}/${dropDate}`)

        }
    }


    return (
        <div>

            <MDBContainer >

                <MDBCard className='text-black m-4' style={{ borderRadius: '10px' }}>
                    <MDBCardBody>
                        <MDBRow>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage style={{ borderRadius: '10px' }} src={imgg} fluid />
                            </MDBCol>

                            <MDBCol md='10' lg='6' className=' order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <div style={{ marginTop: 100 }}>
                                    <div style={styles.container}>

                                        <div className='mb-3'>
                                            <label><b>Select Pickup Date &nbsp;</b></label>
                                            <input
                                                onChange={(event) => {
                                                    setPickupDate(event.target.value)
                                                }}
                                                className='form-control'
                                                type='date'
                                            />
                                        </div>


                                        <div className='mb-3'>
                                            <label><b>Select Drop Date &nbsp;</b></label>
                                            <input
                                                onChange={(event) => {
                                                    setReturnDate(event.target.value)
                                                }}
                                                className='form-control'
                                                type='date'
                                            />
                                        </div>







                                        <div className='mb-3' style={{ marginTop: 20 }}>

                                            <button onClick={signin} style={styles.signinButton}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

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
        borderColor: 'grey',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '1px 1px 20px 5px #C9C9C9',
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

export default Booking

