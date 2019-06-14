import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];
  constructor(public modalController: ModalController) {
    this.perfis = [
      // Criação dos perfis de modo estático !      
      {
        'avatar': 'https://images.all-free-download.com/images/graphicthumb/andrew_101750.jpg',
        'nome': 'João de Paulistana',
        'idade': 20,
        'likes': 0
      },
      {
        'avatar': 'https://badhan.org/img/avatars/defaultFemalePP.png',
        'nome': 'Julia de Jacobina',
        'idade': 18,
        'likes': 0
      }
    ]
  }

  likes(perfil) {
    perfil.likes = perfil.likes + 1;
  }

  // Criação do Modal, onde ele irá abrir o modal
  async abrir_modal() {
    let modal = await this.modalController.create({
      component: PerfilModalPage
    });

    //preparação para quando fechar o modal, ele executa esse código ! (quando clica no OKAY)
    modal.onDidDismiss().then((retorno) => {
      //Será executado somente após o Modal ter sído fechado
      this.perfis.push(retorno);
    });
    modal.present();
  }
}
