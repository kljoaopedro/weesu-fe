import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={<Home />}/>
                {/*<Route path="/:itemId/details" component={ProductDetailsPage}/>*/}
            </Switch>
        </Router>
    )
}

export default App;
