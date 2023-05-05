import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/UsuarioModel';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app-state';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.scss'],
})
export class ListaUsuariosAdminComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  // 1 - Jeito Primeiro
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdministradores
  );

  listaUsuarios2: UsuarioModel[] = [];
  listaUsuarios3: UsuarioModel[] = [];
  listaUsuarios4: UsuarioModel[] = [];
  listUsuarios5$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosAdministradoresPorParametro,
    { perfil: 'Administrador' }
  );

  ngOnInit(): void {
    // Jeito 2
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradores)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios2 = usuarios;
      });

    // Jeito 3
    this.store
      .select(fromUsuariosSelector.getUsuarios)
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios3 = usuarios.filter(
          (filter) => filter.perfil == 'Administrador'
        );
      });

    // Jeito 4
    this.store
      .select(fromUsuariosSelector.getUsuariosAdministradoresPorParametro, {
        perfil: 'Administrador',
      })
      .subscribe((usuarios: UsuarioModel[]) => {
        this.listaUsuarios4 = usuarios;
      });
  }
}
