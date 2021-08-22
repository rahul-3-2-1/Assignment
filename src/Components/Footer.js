import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer=()=>{
    return(
        <div className="bg-color d-flex footer justify-content-between pt-5 text-light">
            <div className="ms-3">
                <p>Powered by bread</p>
                <p>
                    <span className="me-3">
                        <InstagramIcon/>
                    </span>
                    <span className="me-3">
                        <FacebookIcon/>
                    </span>
                    <span className="me-3">
                        <TwitterIcon/>
                    </span>
                    <span className="me-3">
                        <LinkedInIcon/>
                    </span>
                </p>
            </div>
            <div className="me-3">
            <p> &copy; Bread 2021 All rights reserved</p>
            <p className="d-flex justify-content-between">
                <p>Terms</p>
                <p>Privacy</p>
                <p>About</p>
            </p>
            </div>

        </div>
    )

}
export default Footer;