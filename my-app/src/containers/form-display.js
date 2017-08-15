import React, {Component} from 'react';
import {connect} from 'react-redux';

class FormDisplay extends Component {
    showForm(){
        if(!this.props.data)
            return (<h1>Start typing</h1>);
        return (
            <div>
                <h5>{this.props.data.firstName}</h5>
                <br />
                <h5>{this.props.data.lastName}</h5>
                <br />
                <h5>{this.props.data.mail}</h5>
            </div>
        );
    }
    render() {
        return (
            <form>
                {this.showForm()}
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {data : state.form}
}

export default connect(mapStateToProps)(FormDisplay);