import { fromJS } from 'immutable';
import { SET_GLOBAL_STATE } from '@/store/actions/constants';

const initialState = fromJS({});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GLOBAL_STATE:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
