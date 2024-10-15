import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import legalLogo from "../../assets/legal-person-logo.png";
import naturalLogo from "../../assets/natural-person-logo.png";


function IndividualClient(props) {

    const {name, lastname, activity, contract_date, funds_origin, person_type, assigned_risk, id_number, id_number_expiry_date, country, country_risk, pep} = props.client;  

    return (
        <div className='individual-client-wrapper'>
            <div className='individual-client'>
                <div className='logo-name'>
                    <div className='person-logo'>
                        {person_type === "Natural"? (<img src={naturalLogo} width={75} height={75} />) : (<img src={legalLogo} width={75} height={75} />)}
                    </div>

                    <div className='name-lastname'>
                        <h3>{`${name} ${lastname}`}</h3> 
                    </div>
                </div>
                
                <div className='risk'>
                    <div className='assigned-risk'>
                        Assigned risk:
                    </div>

                    <div 
                    className='risk-type'
                    style={{color: assigned_risk === "Low" ? "#16c447" : (assigned_risk === "Medium" ? "#e3b614" : "#c41c16")}}
                    >
                        {assigned_risk}
                    </div>
                </div>
                

                <div className='kyc-time-to-expiration'>
                    {`KYC date: ${contract_date}`}            
                </div>

                <div className='id-time-to-expiration'>
                    {`${person_type === "Natural" ? "ID renovation:" : ""} ${person_type === "Natural" ? moment(id_number_expiry_date, "YYYYMMDD").fromNow() : ""}`}
                </div>

                <div className='client-link'>
                    <Link className='link' to={`/clients/${id_number}`}>GO TO FILE</Link>
                </div>
            </div>
        </div>
    );
}

export default IndividualClient;