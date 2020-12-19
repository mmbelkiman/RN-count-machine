// Actions
import Counter from '../../models/Counter';

const LOAD_FROM_ARRAY = 'countMachine/counter/LOAD_FROM_ARRAY';
const SET_ACTIVE_COUNTER = 'countMachine/counter/ACTIVE_COUNTER';
const ADD_COUNTER = 'countMachine/counter/ADD_COUNTER';
const REMOVE_COUNTER = 'countMachine/counter/REMOVE_COUNTER';
const SUM_VALUE = 'countMachine/counter/SUM_VALUE';
const SUBTRACT_VALUE = 'countMachine/counter/SUBTRACT_VALUE';
const RESET_VALUE = 'countMachine/counter/RESET_VALUE';

// Reducer
const initialState = {
  counters: [],
  activeCounter: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_FROM_ARRAY:
      return {
        ...state,
        counters: JSON.parse(action.data),
      };
    case SET_ACTIVE_COUNTER:
      return {
        ...state,
        activeCounter: action.activeCounter,
      };
    case ADD_COUNTER:
      return {
        ...state,
        counters: [...state.counters, action.counter],
      };
    case REMOVE_COUNTER:
      let currentCounters = state.counters.slice();

      for (let i = 0; i < currentCounters.length; i++) {
        if (i === action.indexToRemove) {
          currentCounters.splice(i, 1);
        }
      }

      return {
        ...state,
        counters: currentCounters,
        activeCounter: 0,
      };
    case SUM_VALUE:
      let currentCountersToSum = state.counters.slice();

      for (let i = 0; i < currentCountersToSum.length; i++) {
        if (i === action.indexCounter) {
          if (currentCountersToSum[i].value < 9999) {
            currentCountersToSum[i].value++;
          }
        }
      }

      return {
        ...state,
        counters: currentCountersToSum,
      };
    case SUBTRACT_VALUE:
      let currentCountersToSub = state.counters.slice();

      for (let i = 0; i < currentCountersToSub.length; i++) {
        if (i === action.indexCounter) {
          if (currentCountersToSub[i].value > 0) {
            currentCountersToSub[i].value--;
          }
        }
      }

      return {
        ...state,
        counters: currentCountersToSub,
      };
    case RESET_VALUE:
      let currentCountersToReset = state.counters.slice();

      for (let i = 0; i < currentCountersToReset.length; i++) {
        if (i === action.indexCounter) {
          currentCountersToReset[i].value = 0;
        }
      }

      return {
        ...state,
        counters: currentCountersToReset,
      };
    default:
      return state;
  }
}

// Action Creators
export const loadFromArray = (data: []) => {
  return {type: LOAD_FROM_ARRAY, data};
};
export const addCounter = (counter: Counter) => {
  return {type: ADD_COUNTER, counter};
};
export const setActiveCounter = (activeCounter: number) => {
  return {type: SET_ACTIVE_COUNTER, activeCounter};
};
export const removeCounter = (indexToRemove: number) => {
  return {type: REMOVE_COUNTER, indexToRemove};
};
export const sumValue = (indexCounter: number) => {
  return {type: SUM_VALUE, indexCounter};
};
export const subtractValue = (indexCounter: number) => {
  return {type: SUBTRACT_VALUE, indexCounter};
};
export const resetValue = (indexCounter: number) => {
  return {type: RESET_VALUE, indexCounter};
};
