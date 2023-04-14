import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Resposta } from '../models/Resposta.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private usuariosService: UsuariosService) { }
  resposta?: Resposta;
  buscarUsuarios() {
    this.usuariosService.getUsers().subscribe(dados => {
      console.log(dados);
      this.resposta = dados as Resposta;
    });
  }
}
