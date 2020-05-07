import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Home from './Home';
import CreateCampaign from './pages/CreateCampaign';
import Influencer from './pages/manage-influencer'
import Manage_influencer from './pages/manage_proposal'
import CreateInfluancer from './pages/CreateInfluancer';
import View_influancer from './pages/View_influancer';
import Edit_influancer from './pages/Edit_influancer';
import SignUp from './pages/SignUp';
import ViewProposal from './pages/ViewProposal';
import { ProtectedRoute } from './components/protected.route';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/signup'} component={SignUp} />
          <ProtectedRoute path={'/dashboard'} component={Dashboard} />
          <ProtectedRoute path={'/create-campaign'} component={CreateCampaign} />
          <ProtectedRoute path={'/manage-influencer'} component={Influencer} />
          <ProtectedRoute path={'/manage-proposal'} component={Manage_influencer} />
          <ProtectedRoute path={'/create-influancer'} component={CreateInfluancer} />
          <ProtectedRoute path={'/view-influancer/:id'} component={View_influancer} />
          <ProtectedRoute path={'/edit-influancer/:id'} component={Edit_influancer} />
          <ProtectedRoute path={'/view-proposal'} component={ViewProposal} />
          <ProtectedRoute path={'/users'} component={Users} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
