import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
        <h1>Other Page</h1>
        <p>This is a page that is not in the menu.</p>
        <p>
            <Link to="/">Go back to the homepage</Link>
        </p>
        </div>
    );
}

    