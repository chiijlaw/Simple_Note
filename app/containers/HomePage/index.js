/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import FlexCol from './FlexCol';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <FlexCol>
        <H2>
          <FormattedMessage {...messages.insertHeader} />
        </H2>
        <H3>
          <FormattedMessage {...messages.insertMessage} />
        </H3>
      </FlexCol>
    );
  }
}
