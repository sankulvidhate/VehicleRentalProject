import React from 'react';
import axios from 'axios';
import config from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { setBill } from '../Redux/actions/VehicleActions';
import { PropTypes } from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { alignPropType } from 'react-bootstrap/esm/types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTable } from 'mdb-react-ui-kit';

const Bill = () => {

    // const vehicles = useSelector((state) => state.vehicle)
    // const { id, title, imagePath, rentPerDay, transmission, brand, model, fuel, categoryName, cappacity } = vehicles

    // const location = useLocation()

    // const bill = useSelector((state) => state.bill)
    // const { TotalBill } = bill

    const navigate = useNavigate()

    const { pickupDate, dropDate } = useParams();

    const selVehicle = JSON.parse(sessionStorage.getItem("selVehicle"))
    const vehicle_Id = selVehicle.vehicle_id

    const seluser = JSON.parse(sessionStorage.getItem("user"))
    const user_Id = seluser.user_id
    const firstName = seluser.firstName
    const lastName = seluser.lastName

    let days = Math.ceil((new Date(dropDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24))


    const rate = selVehicle.rentPerDay
    const model = selVehicle.model
    const brand = selVehicle.brand
    const subscriptionStatus = seluser.status

    // if (subscriptionStatus !== null){
    //     if(subscriptionStatus === 'Gold'){
    //         var disc = 0.2
    //         return disc;
    //     } else if (subscriptionStatus === 'Silver'){
    //         var disc = 0.1
    //         return disc;
    //     }
    // }else {var disc = 0
    //     return disc;}

    const pay = rate * days

    const GST = pay * 0.18

    const EC = pay * 0.02

    const deposit = 2500

    // const discApplicable = (totalPay) * disc

    const totalpay = (pay + GST + EC + deposit)

    








    const generate = () => {

        let days = Math.ceil((new Date(dropDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24))

        const rate = JSON.parse(sessionStorage.selvehicle.rentPerDay)
        const model = JSON.parse(sessionStorage.selvehicle.model)

        const totalpay = rate * days

    }

    // useEffect(() => {
    //     generate();
    // }, [])

    // const generateBill = () => {

    //     const time = new Date(dropDate) - new Date(pickupDate);

    //     const days = Math.ceil(time / (1000 * 60 * 60 * 24))

    //     console.log(days)

    //     let rent = parseInt(`${rentPerDay}`, 10)
    //     console.log(rent)

    //     let TotalBill = 2000

    //     dispatch(setBill({ TotalBill }))

    // }




    const signin = () => {

        axios.post(config.serverURL + `/api/booking/addBooking/${user_Id}/${vehicle_Id}`
            , {
                pickupDate,
                dropDate,
                totalpay,
                deposit,
            }
        )
            .then((response) => {
                // get the data returned by server
                const bookingresult = response.data

                // check if user's authentication is successfull
                if (bookingresult['status'] === 'error') {
                    toast.error('invalid credentials')
                } else {

                    // dispatch(setUser(result))

                    sessionStorage.setItem('booking', JSON.stringify(bookingresult))


                    toast.success('Details Saved')

                    navigate("/payment")


                }
            }).catch((error) => {
                console.log('error')
                console.log(error)
            })


    }


    return (

        <div style={{ marginTop: 50 }}>

            <div style={styles.container1}>
                <MDBTable striped>


                    <tr><th><a>User ID : </a></th><td>{user_Id}</td></tr>
                    <tr><th><a>user Name :</a></th><td>{firstName} {lastName}</td></tr>
                    <tr><th><a>Vehicle Booked :</a></th><td>{brand} {model}</td></tr>
                    <tr><hr /></tr>

                    <tr><th><a>Refundable Deposit :</a></th><td>Rs. 2500</td></tr>
                    <tr><th><a>Booking Days :</a></th><td>{days}</td></tr>
                    <tr><th><a>Per Day :</a></th><td>Rs. {rate}</td></tr>
                    <tr><th><a>Ride Charges :</a></th><td>Rs. {pay}</td></tr>
                    <hr />
                    {/* <tr><th><a>Taxes :</a></th><td></td></tr> */}
                    <tr><th><a>GST :</a></th><td>Rs. {GST}</td></tr>
                    <tr><th><a>E.C. :</a></th><td>Rs. {EC}</td></tr>
                    <hr />
                    <tr><th><h5>Grand Total :</h5></th><td><h5>Rs. {totalpay}</h5></td></tr>
                    <hr></hr>


                </MDBTable>

                <div className='mb-3' style={{ marginTop: 20 }}>
                    <a>
                        <button onClick={signin} style={styles.signinButton}>
                            Click To Pay
                        </button>
                    </a>
                </div>



            </div>


        </div>

    )
}

const styles = {
    container: {
        width: 400,
        // height: 50,
        padding: 20,
        position: 'relative',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        textAlign: 'center',
        margin: 'auto',
        marginBottom: 20,
        borderColor: 'black',
        borderRadius: 10,
        broderWidth: 1,
        borderStyle: 'solid',
        // boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    container1: {
        width: 400,
        // height: 440,
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
        marginTop: 5,
    },
}

export default Bill