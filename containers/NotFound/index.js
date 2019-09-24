import React, {Component} from 'react';

class NotFound extends Component {
    componentWillMount() {
        if (this.props.staticContext) {
            this.props.staticContext.NOT_FOUND = true;
        }
    }
    render() {
        return (
            <div>404 not found</div>
        );
    }
}

export default NotFound;
