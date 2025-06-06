import React from "react";

const SpinningLoader: React.FC<{ message?: string }> = ({ message = "Please Wait Content Loading" }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '60vh' }}>
            <h1>{message}</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default SpinningLoader;
