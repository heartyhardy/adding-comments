import React, { Component } from 'react';

class ErrorBoundry extends Component {


    state = {
        hasError: false,
        errorInfo: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({hasError:true, errorInfo: err});
    }

    render() {
        if(this.state.hasError){
            return <div> Something went wrong! </div>
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundry