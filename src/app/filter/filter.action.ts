import { createAction, props } from "@ngrx/store";

export type FiltersValid = "Todos" | "Completados" | "Pendientes";

export const setear = createAction(
    '[Filter] Set Filter',
    props<{ filter: FiltersValid }>()
);
