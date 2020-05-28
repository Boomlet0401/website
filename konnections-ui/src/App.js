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
import ProposalPreview from './pages/ProposalPreview';
import ClientHome from './clientViews/ClientHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/signup'} exact component={SignUp} />
          <ProtectedRoute path={'/dashboard'} exact component={Dashboard} />
          <ProtectedRoute path={'/create-campaign'} exact component={CreateCampaign} />
          <ProtectedRoute path={'/manage-influencer'} exact component={Influencer} />
          <ProtectedRoute path={'/manage-proposal'} exact component={Manage_influencer} />
          <ProtectedRoute path={'/create-influancer'} exact component={CreateInfluancer} />
          <ProtectedRoute path={'/view-influancer/:id'} exact component={View_influancer} />
          <ProtectedRoute path={'/edit-influancer/:id'} exact component={Edit_influancer} />
          <ProtectedRoute path={'/view-proposal/:id'} exact component={ViewProposal} />
          <ProtectedRoute path={'/proposal-preview'} exact component={ProposalPreview} />
          <ProtectedRoute path={'/users'} exact component={Users} />

          {/* // Client Screens */}
          <ProtectedRoute path={'/proposals'} exact component={ClientHome} />

        </Switch>
      </div>
    </Router >
  );
}

export default App;
