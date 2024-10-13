import React from 'react';
import { Link } from 'react-router-dom';

function IndividualClient(props) {
    return (
        <div>
            <div className='name'>
                <h3>{props.title}</h3>
            </div>
            
            <div className='activity'>
                {props.activity}
            </div>

            <div className='person'>
                {props.person}
            </div>

            <div className='risk'>
                {props.risk}
            </div>

            <div className='id-expiration'>
                {props.id_expiration}
            </div>

            <Link to={`/clients/${props.slug}`}>Link</Link>
        </div>
    );
}

export default IndividualClient;