import React from "react";

const SpinningLoader: React.FC<{ message?: string }> = ({ message = "Please Wait Content Loading" }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center align-items-center" style={{ height: '60vh' }}>
            <h1> {message}</h1>
            <div className="spinner-border text-primary">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-light">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-dark">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default SpinningLoader;