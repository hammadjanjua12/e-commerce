import React from 'react'

const AddressCard = ({address}) => {
  if (!address) {
    // Handle the case where address is undefined
    return <p>No address available</p>;
  }
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>{address.firstName + "" + address.lastName}</p>
            <p>{address.state},{address.streetAddress},{address.zipCode}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Phone Number</p>
                <p>{address.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard