import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='about-wrapper'>
                    <div className='left-column'>                       
                        <div>
                            We are here to help your company keep <b>client's info updated</b> as part of the due diligence measures application. 
                        </div>
                    </div>
                    
                    <div className='right-column'>
                       <div className='top-paragraph'>
                            Set up alerts to get informed when one of your <b>client's KYC</b> info has to be <b>updated</b> based on their assigned risk.
                       </div>

                       <div className='bottom-paragraph'>
                        Anticipate to your client's <b>ID expiry date</b> so you can request for the new ones.
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}