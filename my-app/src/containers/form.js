import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeField} from '../actions';

class FormDisplay extends Component {
    constructor(props) {
        super(props);
        // can not find `this` if not bind
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.props.changeField(event.target.value, event.target.id);
    }
    render() {
        return (
            <form>
                <label>
                    First:
                    <input type="text" id="CHANGE_FIRST" value={this.props.data.firstName} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Last:
                    <input type="text" id="CHANGE_LAST" value={this.props.data.lastName} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Mail:
                    <input type="text" id="CHANGE_MAIL" value={this.props.data.mail} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({changeField: changeField}, dispatch);
}

function mapStateToProps(state) {
    return {data : state.form}
}

export default connect(mapStateToProps, matchDispatchToProps)(FormDisplay);