import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const App = ({ message }) => <div>{message}</div>;
// const App: React.FunctionComponent<{message: string}> = ({ message }) => <div>{message}</div>;

type AppProps = {message: string};
const App: React.FunctionComponent<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(
    <App message="Hello world" />,
    document.getElementById('root')
);
