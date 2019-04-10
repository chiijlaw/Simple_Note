import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the displayNotes state domain
 */

const selectDisplayNotesDomain = state =>
  state.get('displayNotes', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DisplayNotes
 */

const makeSelectDisplayNotes = () =>
  createSelector(selectDisplayNotesDomain, substate => substate.toJS());

export default makeSelectDisplayNotes;
export { selectDisplayNotesDomain };
