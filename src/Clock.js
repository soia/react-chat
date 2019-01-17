import React from 'react'

class Clock extends React.PureComponent {

    state = {
        time: new Date()
    }


    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {

        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock
