import {combineReducers} from 'redux';
import ClientsReducers from './client';
import ActiveClient from './client-active';
import ClientFilter from './client-filter';

const allReducers = combineReducers({
    clients:ClientsReducers,
    activeClient: ActiveClient,
    clientFilter: ClientFilter
});

export default allReducers;