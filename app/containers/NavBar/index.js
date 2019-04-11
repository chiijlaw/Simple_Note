import React from 'react';
import Link from 'components/Link';
import { FormattedMessage } from 'react-intl';
import FlexCentered from 'components/FlexCentered';
import StyledH1 from './StyledH1';
import Wrapper from './Wrapper';
import messages from './messages';

export default function() {
  const loc = window.location.pathname;
  const link =
    loc === '/notes' ? (
      <Link to="/">Create Notes</Link>
    ) : (
      <Link to="/notes">View Notes</Link>
    );

  return (
    <Wrapper>
      <StyledH1>
        <FormattedMessage {...messages.header} />
      </StyledH1>
      <FlexCentered>{link}</FlexCentered>
    </Wrapper>
  );
}
