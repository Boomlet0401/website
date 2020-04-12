import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './Home';
import CreateCampaign from './pages/CreateCampaign';
import Influencer from './pages/manage-influencer'
import Manage_influencer from './pages/manage_proposal'
import Create_influancer from './pages/Create_influancer';
import View_influancer from './pages/View_influancer';
import Edit_influancer from './pages/Edit_influancer';
import SignUp from './pages/SignUp';
import ViewProposal from './pages/ViewProposal';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/create-campaign'} component={CreateCampaign} />
          <Route path={'/manage-influencer'} component={Influencer} />
          <Route path={'/manage-proposal'} component={Manage_influencer} />
          <Route path={'/create-influancer'} component={Create_influancer} />
          <Route path={'/view-influancer'} component={View_influancer} />
          <Route path={'/edit-influancer'} component={Edit_influancer} />
          <Route path={'/signup'} component={SignUp} />
          <Route path={'/view-proposal'} component={ViewProposal} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
