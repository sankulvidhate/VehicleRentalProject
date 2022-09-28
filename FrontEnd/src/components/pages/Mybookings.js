import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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
    MDBCheckbox,
    MDBTable
}
    from 'mdb-react-ui-kit';

const Mybookings = () => {

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
    const vehicleID = selVehicle.vehicle_id

    const delvehicle = async () => {
        const response = await axios.post(`http://localhost:8080/api/booking/endBooking/${user_Id}/${vehicleID}`)
            .catch((err) => {
                console.log("Err", err);
            })

            sessionStorage.removeItem("selVehicle")
            
            navigate('/home')


    }


    return (
        <div style={{ marginTop: 50 }}>

            <div style={styles.container1}>


                <MDBTable striped>

                    <tr><th>User ID</th><th>user Name</th><th>Vehicle ID</th><th></th></tr>

                    
                        <tr><td>  {user_Id}  </td><td> {firstName} {lastName} </td><td>  {vehicleID}  </td><td><a>
                            <button onClick={delvehicle} style={styles.signinButton}>
                                Cancel Booking
                            </button>
                        </a></td></tr>


                   
                </MDBTable>
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

export default Mybookings
