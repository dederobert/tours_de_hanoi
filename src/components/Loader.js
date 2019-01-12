import React, {Component} from "react";

export class Loader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.timer
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        if (this.props.type === -1 || !this.props.active) return null;
        else if (this.props.type === 0 ) return <div>Saving ...</div>;
        else if(this.props.type === 1) return <div><progress value={this.state.counter} max="100">{this.state.counter}</progress></div>
    }

    tick() {
        if (this.state.counter >= this.props.max)
            this.setState({counter: 0});
        if (this.props.active)
            this.setState((state, props) => ({counter: state.counter + props.increment}))
    }
}