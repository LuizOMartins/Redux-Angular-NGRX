import { UsuarioModel } from './../Models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Repository/UsuarioService';

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

  constructor(private usuarioServide: UsuarioService) {}

  ngOnInit() {}

  addUsuario() {
    if(this.model.id == 0){
      this.usuarioServide.addUsuario(this.model).subscribe();
    }else{
      //atualizar
    }
  }
}
