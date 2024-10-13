import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='about-wrapper'>
                    <div className='left-column'>                       
                        <div>
                            We are here to help your company keep client's info updated as part of the due diligence measures application. 
                        </div>
                    </div>
                    
                    <div className='right-column'>
                       <div>
                            Set up alerts to get informed when one of your client's KYC info has to be updated based on their assigned risk.
                       </div>

                       <div>
                        Anticipate to your client's ID expiry date so you can request for the new ones.
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}