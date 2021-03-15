import React from 'react';
import UserAgentHOC from './hoc/UserAgent';

const MainContainer = (props) => {
    return (
        <div>
            <h1>User Agent</h1>
            <p>{props.userAgent}</p>
        </div>
    );
}

export default UserAgentHOC(MainContainer);
