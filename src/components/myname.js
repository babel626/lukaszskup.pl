import React, {Component} from 'react';
import './css/myname.css';
class Myname extends React.Component {
    render() {
        return <div className={'section'}>
            <h1 className={'hello'}>Hello <br></br> my name <br></br> is <br></br> {this.props.name}.</h1>
        </div>;
    }
}

export default Myname;