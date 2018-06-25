import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterCl} from '../actions/index';

import './filterClient.css'

class FilterClient extends Component {

    filterClient = () => {
        this.props.filterCl(this.inputText.value);
    };

    render() {
        return (
            <input className="findClient" type="text" onChange={this.filterClient} ref={(input) => this.inputText = input}/>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.clientFilter,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        filterCl: filterCl
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterClient);