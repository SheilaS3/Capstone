import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import legalLogo from "../../assets/legal-person-logo.png";
import naturalLogo from "../../assets/natural-person-logo.png";


function IndividualClient(props) {
    return (
        <div>
            <div className='person-logo'>
                {props.person === "Natural"? (<img src={naturalLogo} width={75} height={75} />) : (<img src={legalLogo} width={75} height={75} />)}
            </div>

            <div className='name-lastname'>
                <h3>{`${props.title} ${props.lastname}`}</h3> 
            </div>
            
            <div className='risk'>
                <div className='assigned-risk'>
                    Assigned risk:
                </div>

                <div 
                className='risk-type'
                style={{color: props.risk === "Low" ? "#16c447" : (props.risk === "Medium" ? "#e3b614" : "#c41c16")}}
                >
                    {props.risk}
                </div>
            </div>
            

            <div className='kyc-time-to-expiration'>
                {`KYC renovation: ${props.contract_date}`}            
            </div>

            <div className='id-time-to-expiration'>
                {`${props.person === "Natural" ? "ID renovation:" : ""} ${props.person === "Natural" ? moment(props.id_expiration, "YYYYMMDD").fromNow() : ""}`}
            </div>

            <Link to={`/clients/${props.slug}`}>Link</Link>
        </div>
    );
}

export default IndividualClient;