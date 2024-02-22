import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Doctorcard = ({ doctors }) => {
  const { doctor_name, fee, image_link, desingnation, degree, _id } = doctors;

  return (
    <div className="card w-96 bg-base-100 shadow-2xl translate-x-2">
      <figure className="px-10 pt-10">
        {image_link ?
          <img src={image_link} alt="..." className="rounded-full w-28 h-28" />
          :
          <i className="fa-solid fa-user-doctor text-5xl"></i>}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctor_name}</h2>
        <p className='text-xs'>{degree}</p>
        <p className='text-xs'>{desingnation}</p>
        <p className="text-xl font-bold text-green-700">{fee}TK</p>
        <div className="card-actions">
          <Link to={`/appointment/${_id}`} className="btn btn-neutral" >Make appointment</Link>

        </div>
      </div>
    </div>
  )
}
export default Doctorcard
