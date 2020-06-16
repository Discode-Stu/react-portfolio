
import React from 'react';

import aboutImg from "../../../static/assets/images/bio/aboutImg.jpg"

export default function () { return (

    <div className="content-page-wrapper">
        <div 
        className="left-column"
        style={{
            background: "url(" + aboutImg + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />

        <div className="right-column">
            <p>
            aliquet bibendum enim facilisis gravida neque convallis a cras semper 
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat 
                id porta nibh venenatis cras sed felis eget velit aliquet sagittis id 
                consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac 
                tincidunt vitae semper quisaliquet bibendum enim facilisis gravida neque convallis a cras semper 
                auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat 
                id porta nibh venenatis cras sed felis eget velit aliquet sagittis id 
                consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac 
                tincidunt vitae semper quisaliquet bibendum enim facilisis gravida neque convallis a cras semper 

            </p>


        </div>
    </div>
);
}