import React from 'react';

import { useParams } from 'react-router-dom';


function ClientDetail(props) {

    const params = useParams();

    return (
        <div className='client-detail'>
            <div>
                Client Detail for {params.slug}
            </div>

            <div>
                "id":
                "activity": 
                "assigned_risk": 
                "contract_date": 
                "country": 
                "country_risk":
                "funds_origin": 
                "id_number": 
                "id_number_expiry_date":
                "lastname":
                "name":
                "pep":
                "person_type":
            </div>
        </div>
    );
}

export default ClientDetail;