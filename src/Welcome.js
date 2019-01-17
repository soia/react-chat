import React from 'react';

class Welcome extends React.Component {
    render() {

        const { children } = this.props;

        return (
            <div>
                <h1>Hello, {children}</h1>
            </div>
        )
    }
}

export default Welcome;