import { Action, createReducer, on } from '@ngrx/store';
import { FiltersValid, setear } from './filter.action';

export const initialState: FiltersValid = "Todos";

const _filterReducer = createReducer<FiltersValid, Action>(
    initialState,
    on(setear, (state, { filter }) => filter),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}