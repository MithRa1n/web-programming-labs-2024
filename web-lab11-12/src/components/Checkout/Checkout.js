import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(20, "First name must be less than 20 characters")
            .required("First name is required"),
        lastName: Yup.string()
            .max(20, "Last name must be less than 20 characters")
            .required("Last name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^\d+$/, "Phone number must be only digits")
            .min(10, "Phone number must be at least 10 digits")
            .required("Phone number is required"),
        address: Yup.string()
            .required("Address is required"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    };

    const handleSubmit = (values) => {
        console.log("Form Submitted:", values);
        navigate("/success");
    };

    return (
        <div className="checkout-main container py-5">
            <h2 className="text-center mb-4">Checkout</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-auto" style={{ maxWidth: "600px" }}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <Field
                                name="firstName"
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-danger small"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <Field
                                name="lastName"
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger small"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                name="email"
                                type="email"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger small"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Field
                                name="phone"
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-danger small"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <Field
                                name="address"
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="address"
                                component="div"
                                className="text-danger small"
                            />
                        </div>

                        <div id="error-alert" className="alert alert-danger d-none">
                            Oh snap! Change a few things up and try submitting again.
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/cart")}
                            >
                                Go Back
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                Continue
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;
