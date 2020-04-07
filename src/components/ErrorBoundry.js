import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return <div>Oops!</div>
        }
        return this.props.children;
    }
}