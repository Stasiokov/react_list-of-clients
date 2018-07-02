import React, {Component} from 'react';
import {connect} from 'react-redux';
import './details.css';

class Details extends Component {
    render() {
        if (!this.props.client) {
            return (
                <div className="details">Click client</div>
            )
        }
        return (
            <div className="details">
                <div className="details-left">
                    <img src={this.props.client.general.avatar} alt={this.props.client.job.title}/>
                </div>
                <div className="details-right">
                    <p>{this.props.client.general.firstName} {this.props.client.general.lastName}</p>
                    <p>Company : {this.props.client.job.company}</p>
                    <p>Job : {this.props.client.job.title}</p>
                    <br/>
                    <p>Email : {this.props.client.contact.email}</p>
                    <p>Phone : {this.props.client.contact.phone}</p>
                    <br/>
                    <p>Address:</p>
                    <p>Street : {this.props.client.address.street}</p>
                    <p>City : {this.props.client.address.city}</p>
                    <p>ZipCode : {this.props.client.address.zipCode}</p>
                    <p>Country : {this.props.client.address.country}</p></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        client: state.activeClient
    }
}
export default connect(mapStateToProps)(Details);