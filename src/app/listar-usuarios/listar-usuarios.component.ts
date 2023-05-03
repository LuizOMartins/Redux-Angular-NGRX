import { UsuarioModel } from './../Models/UsuarioModel';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../Store/app-state';
import * as fromUsuariosAction from '../Store/usuarios/usuario.actions';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }
}
