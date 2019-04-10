/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Simple Note',
  },
  insertHeader: {
    id: `${scope}.insert.header`,
    defaultMessage: 'Try Me!',
  },
  insertMessage: {
    id: `${scope}.insert.message`,
    defaultMessage: 'Create a Note here:',
  },
});
