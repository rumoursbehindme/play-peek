import React from "react";

const SpinningLoader: React.FC = () => {
    return (
        <div className="container">
            <h1> Please Wait Content Loading</h1>
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