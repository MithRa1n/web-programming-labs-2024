import React from 'react';
import './ViewMore.css';

const ViewMore = ({ onClick }) => {


    return (
        <div className="ButtonDiv text-center">
            <button className="btn btn-custom" onClick={onClick}>
                View More
            </button>
        </div>
    );
};

export default ViewMore;
