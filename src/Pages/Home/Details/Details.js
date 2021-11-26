import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";
const Details = () => {
    const [service, setService] = useState({});
    const { user } = useAuth();
    const { serviceId } = useParams();
    const email = sessionStorage.getItem("email");
    console.log(serviceId);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";
        fetch("https://hidden-hamlet-67442.herokuapp.com/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())

            .then(result => {
                if (result) {
                    alert('Product deleted successfully');
                    reset();
                    console.log(result);
                }
            })
        //     .then((result) => console.log(result));
        // console.log(data);
    };

    useEffect(() => {
        fetch(`https://hidden-hamlet-67442.herokuapp.com/singleService/${serviceId}`)
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    reset();
                    console.log(data);
                    setService(data);
                }
            })
        //.then((data) => setService(data));
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <br /><br />
            <div className="details-container">
                <div className="row container">
                    <div className="col-md-6">
                        <img className="w-50" src={service.image} alt="" />
                        <br /><br />
                        <p>{service?.description}</p>
                        <h3>Name : {service?.name}</h3>
                        <h3> Price : {service?.price}</h3>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="Name"
                                defaultValue={service?.name}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("description")}
                                defaultValue={service?.description}
                                placeholder="Description"
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("image", { required: true })}
                                placeholder="Image Link"
                                defaultValue={service?.image}
                                className="p-2 m-2 w-100 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                defaultValue={service?.price}
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
                                value="Order now"
                                className="btn btn-info w-50 mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;