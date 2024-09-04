import React from 'react'
import { useSelector } from 'react-redux';

const AddressCard = ({address}) => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    // Handle the case where user authentication data is not available
    return <p>No user data available</p>;
  }

  const { firstName, lastName } = user;

  if (!address) {
    // Handle the case where address is undefined
    return <p>No address available</p>;
  }
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>Name: {firstName} {lastName}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>State: {address.state}</p>
                <p></p>
            </div>
            <div className='space-y-1'>
                <p className='font-semibold'>Address: {address.streetAddress}</p>
                <p></p>
            </div>
            <div className='space-y-1'>
                <p className='font-semibold'>Postal Code: {address.zipCode}</p>
                <p></p>
            </div>   
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number: {address.mobile}</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard