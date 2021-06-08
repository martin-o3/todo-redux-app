import { ActionReducerMap } from "@ngrx/store";
import { FiltersValid } from "./filter/filter.action";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: Todo[],
    filter: FiltersValid
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer

}