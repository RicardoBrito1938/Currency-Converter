import { CONVERT_CURRENCY } from "../actions";
const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  if (action.type === CONVERT_CURRENCY) {
    const result = action.payload.data;

    return result;
  } else {
    return state;
  }
}
