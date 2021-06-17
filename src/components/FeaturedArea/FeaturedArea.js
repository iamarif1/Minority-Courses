import React from 'react';
import FeaturedSupport from '../FeaturedSupport/FeaturedSupport';
import UpcomingStartups from '../UpcomingStartups/UpcomingStartups';
import FeaturedStartups from './../FeaturedStartups/FeaturedStartups';

const FeaturedArea = () => {
    return (
        <section className="features">
            <div>
                <div className="row">
                    <FeaturedStartups/>
                    <FeaturedSupport/>
                    <UpcomingStartup/>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArea;