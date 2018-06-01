import React, {Component} from 'react';

class Myname extends React.Component {
    render() {
        return <h1>Hello, my name is {this.props.name}</h1>;
    }
}

export default Myname;