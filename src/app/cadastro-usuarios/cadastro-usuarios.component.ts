import { UsuarioModel } from './../Models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import * as fromUsuariosAction from '../Store/usuarios/usuario.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app-state';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = {
    id: 0,
    nome: '',
    idade: 0,
    perfil: '',
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addUsuario() {
    if (this.model.id == 0) {
      this.store.dispatch(
        fromUsuariosAction.CreateUsuario({ payload: this.model })
      );
    } else {
       this.store.dispatch(
        fromUsuariosAction.UpdateUsuario({ payload: this.model })
      );
    }
  }
}
