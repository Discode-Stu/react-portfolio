import React from 'react';

import PortfolioContainer from '../portfolio/portfolio-container';
import HomepageFeature from '../../animationFeatures/homepageFeature';
import ThreeCirclesAnimation from '../../animationFeatures/circlesAnimation'
import ImageReveal from '../../animationFeatures/imageReveal';

export default function() {
    return (
        <React.Fragment>
            <div>
                <PortfolioContainer />

            </div>
            {/* <div>
                <HomepageFeature />
            </div>
            <br></br>
            <div>
                <ThreeCirclesAnimation />
            </div> */}
            <div>
                <ImageReveal />
            </div>
        </React.Fragment>

    );
}