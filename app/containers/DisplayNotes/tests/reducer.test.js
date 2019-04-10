import { fromJS } from 'immutable';
import displayNotesReducer from '../reducer';

describe('displayNotesReducer', () => {
  it('returns the initial state', () => {
    expect(displayNotesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
