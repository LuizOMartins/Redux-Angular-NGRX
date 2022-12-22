import { UsuarioModel } from './../Models/UsuarioModel';

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Repository/UsuarioService';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UsuarioModel[] = [];


  constructor(private usuarioService: UsuarioService){
  }

  ngOnInit(): void {
      this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) =>{
        this.listaUsuarios = usuarios;
      });
  }

}
