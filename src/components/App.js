import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import DepartmentListContainer from './department/DepartmentListContainer';
import AddOrEditDepartmentContainer from './department/AddOrEditDepartmentContainer';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer';

const history = createBrowserHistory();

const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>
                    <HeaderNavContainer />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/departments" component={DepartmentListContainer} />
                        <Route exact path="/department" component={AddOrEditDepartmentContainer} />
                        <Route path="/department/:id" component={AddOrEditDepartmentContainer} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>

            </Router>
        </div>
    );
};


export default App;
