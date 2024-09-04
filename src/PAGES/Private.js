import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Private(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("login");
        if (!token) {
            navigate('/notfound');
        }
    }, []);

    return (
        <div>
            <Component />
        </div>
    );
}

export default Private;
