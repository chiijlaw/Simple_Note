/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NavBar from 'containers/NavBar';
import HomePage from 'containers/HomePage/Loadable';
import DisplayNotes from 'containers/DisplayNotes/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Simple Note" defaultTitle="Simple Note">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/notes" component={DisplayNotes} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
