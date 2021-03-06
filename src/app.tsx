import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Fancy} from '../lib';
import {CheckboxWithLabel} from './checkboxWithLabel';
import { id, onText, offText } from './constants';

// Stateless:
// // const App = ({ message }) => <div>{message}</div>;
// // const App: React.FunctionComponent<{message: string}> = ({ message }) => <div>{message}</div>;
// type AppProps = {message: string};
// const App: React.FunctionComponent<AppProps> = ({ message }) => <div>{message}</div>;

////////////////////////////////////////

// Stateful:
// class App extends React.Component {
//     // render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
//     render() {
//         return <div> Hello world</div>;
//     }
// }

// class App extends React.Component<{message: string}> {
//     render() {
//         return <div>{this.props.message}</div>;
//     }
// }

// class App extends React.Component<{message: string}, {count: number}> {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return <div onClick={this.increment}>{this.props.message} {this.state.count}</div>;
//     }
//
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }

// type AppProps = {message: string};
// type AppState = {count: number}
// class App extends React.Component<AppProps, AppState> {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return <div onClick={this.increment}>{this.props.message} {this.state.count}</div>;
//     }
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
// }

// ReactDOM.render(
//     <App message="Hello again" />,
//     document.getElementById('root')
// );

///////////////////////////////////////////////////////////////

// ReactDOM.render(
//     <div>Hello world</div>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Fancy text={"Hello world"} />,
//     document.getElementById('root')
// );

////////////////////////////////////////////////////////////////

ReactDOM.render(
    <CheckboxWithLabel id={id} labelOn={onText} labelOff={offText}/>,
    document.getElementById('root')
);
