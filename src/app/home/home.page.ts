import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];
  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get('perfil').then((perfil) => {
      if (perfil) {
        this.perfis = perfil
      }
    })
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
      this.perfis.push(retorno.data);
      this.storage.set('perfil', this.perfis);
    });
    modal.present();
  }
}
