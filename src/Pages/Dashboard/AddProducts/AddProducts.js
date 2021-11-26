import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';

const AddProducts = () => {
    const { use } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://hidden-hamlet-67442.herokuapp.com/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    alert('Product added successfully');
                    reset();
                    console.log(data);
                }
            })

        console.log(data);

    };
    return (
        <div>
            <h1 className="mt-3 text-center text-danger">Please Add Services</h1>
            <div className=" w-25 m-auto mt-4">
                <div className=" ">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <select {...register("model")} className="p-2 m-2 w-100">
                                <option value="premium">premium</option>
                                <option value="classic">classic</option>
                                <option value="business">business</option>
                            </select>
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Add"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;