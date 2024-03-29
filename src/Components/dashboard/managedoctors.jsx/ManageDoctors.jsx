import React from 'react';
import getDoctors from '../../../api/getDoctors';
import { BsTrash3Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import axios from 'axios';

const ManageDoctors = () => {
    const [doctors, refetch] = getDoctors();
    if (!doctors) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }
    const removeDoctor = async (doctor) => {
        console.log(doctor._id)
        try {
            const response = await axios.delete(`http://localhost:5000/doctors?_id=${doctor._id}`);
            console.log(`Deleted User: ${doctor.doctor_name}`, response.data);
            refetch()
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    return (
        <div className='flex flex-col space-y-5'>
            <div className='text-4xl font-bold m-9'>Manage Doctors : {doctors ? doctors.length : "not-found"} </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-2xl font-bold text-center'>Avatar</th>
                            <th className='text-2xl font-bold text-center'>Name</th>
                            <th className='text-2xl font-bold text-center'>Speciality</th>
                            <th className='text-2xl font-bold text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {doctors ?
                            doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td>
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral text-center text-neutral-content rounded-full w-22 h-32 mt-2">
                                                {
                                                    doctor.image_link ? <img src={doctor.image_link} alt="" /> : <FaUser className='text-7xl' />

                                                }
                                            </div>
                                        </div>
                                    </td>
                                    <td className='uppercase text-2xl font-bold text-center text-slate-400'>{doctor.doctor_name}</td>
                                    <td className='uppercase text-2xl font-bold text-center text-slate-400'>{doctor.speciality}</td>
                                    <td className='uppercase text-2xl font-bold text-center text-slate-400'><button className="btn">
                                        <span className='text-4xl text-rose-900' onClick={()=>removeDoctor(doctor)}><BsTrash3Fill/></span>    
                                    </button></td>
                                </tr>
                            ))
                            :
                            "not found"
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;