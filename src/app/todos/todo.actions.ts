import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[Todo Component] Add',
    props<{ texto: string }>()
);

export const toggle = createAction(
    '[Todo Component] Toggle State',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[Todo Component] Toggle All State ',
    props<{ completado: boolean }>()
);

export const borrar = createAction(
    '[Todo Component] Borrar State',
    props<{ id: number }>()
);

export const editar = createAction(
    '[Todo Component] Editar State',
    props<{ id: number, texto: string }>()
);

export const limpiarCompletados = createAction(
    '[Todo Component] Limpiar Completados State'
);