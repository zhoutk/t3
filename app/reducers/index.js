/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   20:26
 */
import assign from 'object-assign';
import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA
} from '../constants/constants';

const initalState = {
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reducer(state=initalState, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      return assign({}, state, {
        color: state.color === 'red' ? 'blue' : 'red'
      });

    case EXAMPLE_REQUEST_START:
      return assign({}, state, {
        data: assign({}, state.data, {
          loading: true,
        }),
      });

    case EXAMPLE_REQUEST_DATA:
      return assign({}, state, {
        data: assign({}, state.data, {
          loading: false,
          objects: action.data
        }),
      });

    default:
      return state;
  }
}
