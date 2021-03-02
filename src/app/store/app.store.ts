import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';


export interface AppState {
  counter: number
}

const initialState: AppState = {
  counter: 10,
};

const featureSelector = 'appState';
const selectFeature = createFeatureSelector(featureSelector);

export const selectCounter = createSelector(
  selectFeature,
  (state: AppState): number => state.counter,
);

export const addCounter = createAction(
  '[COUNTER] Add one to counter',
);


export const substractCounter = createAction(
  '[COUNTER] Substract one to counter',
);

export const resetCounter = createAction(
  '[COUNTER] Reset one to counter',
);


export const setCounterTo = createAction(
  '[COUNTER] Set to counter',
  props<{ value: number }>(),
);


// cart.reducer.ts

const appStateReducer = createReducer(
  initialState,
  on(addCounter, (state: AppState, action): AppState => ({counter: state.counter + 1})),

  /*on(substractCounter, (state: AppState, action: Action): AppState => ({counter: state.counter - 1})),
  on(resetCounter, (state: AppState, action: Action): AppState => ({counter: 0})),
  on(setCounterTo, (state: AppState, action): AppState => ({counter: action.value})),*/
);

export function reducer(state, action) {
  return appStateReducer(state, action);
}

