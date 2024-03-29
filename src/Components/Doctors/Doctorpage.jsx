import { useForm } from "react-hook-form"

import Doctorcard from "../Appointment/Doctorcard"
import PagaTitle from "../Shared/PagaTitle"

import { useLoaderData } from "react-router-dom"

export default function Doctorpage() {

    const data = useLoaderData()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (e) => {

        if (e.name) {
            setData(null)
            const result = data.filter((item) => item.doctor_name.toLowerCase().includes(e.name.toLowerCase()))
            setData(result)
        } else (
            setData(doctors)
        )

    }

    return (
        <div>
            <PagaTitle MainTitle={"Find Doctors"} />
            <div className='text-center my-6'>
                <p className='font-bold text-4xl my-2'>Our Doctors </p>
                <p className='text-gray-500'>Find your appropriate doctor. we are always stand with you to serve.</p>
            </div>
            <form className="mx-4 md:mx-24 flex gap-4" onKeyUp={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Doctors name" className="input input-bordered w-full"  {...register("name")} />
                <input type="submit" className="btn btn-info" value={`search`} />
            </form>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-y-4">

                {!data ?
                    <span className="loading loading-ring loading-lg"></span>
                    :
                    data.map(item => <Doctorcard key={item._id} doctors={item} />)
                }
            </div>
        </div>
    )
}
