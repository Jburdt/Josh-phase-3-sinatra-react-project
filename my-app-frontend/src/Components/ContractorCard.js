import React from 'react'

const ContractorCard = ({ name, phone_number, company }) => {
  return (
    <div>ContractorCard
      <p className='contractor-name'>{name}</p>
      <p className='contractor-address'>{address}</p>
      <p className='contractor-company'>{company}</p>
    </div>
  )
}

export default ContractorCard;