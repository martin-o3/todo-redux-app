import { Pipe, PipeTransform } from '@angular/core';
import { FiltersValid } from '../filter/filter.action';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltersValid): Todo[] {

    switch (filtro) {
      case 'Completados':
        return todos.filter(todo => todo.completado);

      case 'Pendientes':
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }

  }

}
