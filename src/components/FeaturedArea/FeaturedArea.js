import React from 'react';
import UpcomingStartups from '../UpcomingStartups/UpcomingStartups';
import FeaturedStartups from './../FeaturedStartups/FeaturedStartups';
import FeaturedSupport from './../FeaturedSupport/FeaturedSupport';

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