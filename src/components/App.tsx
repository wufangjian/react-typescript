import * as React from "react";

interface IProps { name: string; }
interface IState { age: number }

export class App extends React.Component<IProps, IState>  {
  constructor(props: IProps) {
    super(props)
    this.state = {
      age: 27
    };
  }

  render() {
    return <div>
      <h1>name: {this.props.name}</h1>
      <h1>age: {this.state.age}</h1>
    </div>
  }
}