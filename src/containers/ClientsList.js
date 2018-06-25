import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {select} from '../actions/index';

import './clientsList.css';

class ClientsList extends Component {

    showList() {
        return this.props.clients.map((client) => {
            return (
                <li onClick={() => this.props.select(client)}
                    key={client.contact.email}>
                    <img className="avatar" src={client.general.avatar} alt=""/>
                    <div>
                        <p>{client.general.firstName} {client.general.lastName}</p>
                        <p>Job : {client.job.title}</p>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="listClients">
                {this.showList()}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return {
        clients: state.clients.filter(client => f(state.clientFilter, client))
    }
}
function f(find, arr) {
    for (let i in arr) {
        for (let k in arr[i]) {
            if (arr[i][k].includes(find))return true;
        }
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientsList);