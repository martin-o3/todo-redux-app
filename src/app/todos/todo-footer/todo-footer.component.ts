import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltersValid, setear } from 'src/app/filter/filter.action';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: FiltersValid = "Todos";
  filtros: FiltersValid[] = ["Todos", "Completados", "Pendientes"];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filtro => this.filtroActual = filtro)

    this.store.subscribe(state => {
      this.filtroActual = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  cambiarFiltro(filtro: FiltersValid) {
    this.store.dispatch(setear({ 'filter': filtro }))
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados()); 
  }

}
