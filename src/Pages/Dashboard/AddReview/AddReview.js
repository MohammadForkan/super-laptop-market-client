import React from "react";
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';



const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("https://hidden-hamlet-67442.herokuapp.com/addSReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    alert('Review added successfully');
                    reset();
                    console.log(data);
                }
            })

        console.log(data);
    };
    return (
        <div>
            <br />
            <h1 className="">Review</h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field w-50 p-2 m-2"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br /> <br />
                <input
                    className="input-field w-50 p-2 m-2"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn-lg btn btn-info mt-3"
                    type="submit"
                    value="Save Review"
                />
            </form>
        </div>
    );
};

export default AddReview;