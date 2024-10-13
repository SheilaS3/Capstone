import React from 'react';
import { Link } from 'react-router-dom';

function IndividualClient(props) {
    return (
        <div>
            <h3>{props.title}</h3>

            <Link to={`/clients/${props.slug}`}>Link</Link>
        </div>
    );
}

export default IndividualClient;