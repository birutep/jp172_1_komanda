import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import HelpContentAll from '../Components/HelpCenterElements/HelpContentAll';

const HelpCenter = ( props ) => {
    return (
        <div>
            <SubHeader name="Help Center"/>
            <HelpContentAll />
        </div>
    )
};

export default HelpCenter;
