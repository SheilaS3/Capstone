import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>Sorry, we couldn't find that page.</h2>
            <Link to="/">Return to homepage</Link>
        </div>
    );
}

export default NotFound;