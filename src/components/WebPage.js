import React from 'react';

import ClientsList from '../containers/ClientsList';
import Details from '../containers/Details';
import FilterClient from '../containers/FilterClient'

import './webPage.css'

const WebPage = () => (
    <div className="container">
        <div>
            <FilterClient/>
            <ClientsList/>
        </div>
        <Details/>
    </div>
);

export default WebPage;