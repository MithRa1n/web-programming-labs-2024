import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Success.css";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="success-main d-flex flex-column align-items-center justify-content-center text-center">
            <div className="mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    fill="green"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM7.5 11.5l5-5-1-1-4 4-2-2-1 1 3 3z" />
                </svg>
            </div>

            <h2 className="text-success mb-3">Success!</h2>
            <p className="mb-2">Your order was sent to processing!</p>
            <p className="mb-4">Check your email box for further information.</p>

            <button
                className="btn btn-primary"
                onClick={() => navigate("/catalog")}
            >
                Go back to Catalog
            </button>
        </div>
    );
};

export default Success;
