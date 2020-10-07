import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Content from '../src/Notes';
import Add from '../src/Add';
import Edit from '../src/Edit';

const Example = () => {
    return (
        <Router className="App__container">
            <>
            <Switch>
                <Route exact path="/"> <Content /> </Route>
                <Route path="/add"> <Add /> </Route>
                <Route path="/edit/:id"> <Edit /> </Route>
            </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
