import { Component } from "react";
import { Button } from "react-bootstrap";


class Hello extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            greetMsg:"Hello World",
            counter:0
        }
        console.log("constructir");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps");
        return null;   
    }

    componentDidMount()
    {
        console.log("ComponentDidMount");
    }

    shouldComponentUpdate(nextProps,nextState)
    {        
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getSnapshotBeforeUpdate");
    }

    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("componentDidUpdate");
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }

   increment=()=>{
    this.setState({counter:this.state.counter+1});
   }


    render()
    {
        //return JSX element or UI
        const element=
        <>
            <h1>This is Class component - {this.state.greetMsg}, total likes are- {this.state.counter}</h1>
            <Button onClick={this.increment}>Like</Button>
        </>
        return element;
    }
}

export default Hello;