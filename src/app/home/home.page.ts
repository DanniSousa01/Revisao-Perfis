import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];
  constructor(public toastController: ToastController,public modalController: ModalController, private storage: Storage, public alertController: AlertController) {
    this.storage.get('perfil').then((perfil) => {
      if (perfil) {
        this.perfis = perfil
      }
    })
  }

  //Contagem de Likes
  likes(perfil) {
    perfil.likes = perfil.likes + 1;
  }

  async remove(perfil){
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Produto removido com sucesso!!!',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: async () => {
            // Atualizar formulário

            // Remover o item selecionado da lista
            var i = this.perfis.indexOf(perfil);
            this.perfis.splice(i, 1);
            this.storage.set('compras_key', this.perfis);

            // #3 - Criando um Toast
            const toast = await this.toastController.create({
              message: 'Produto removido com sucesso!',
              duration: 3000,
              position: 'top',
              color: 'dark'
            });

            // #4 Exibir a mensagem na tela
            toast.present();
          }
        }
      ]
    });

    await alert.present();
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
        //Onde fica o storage, ou seja, vsai salvar tudo que eu cadastrar !
        this.storage.set('perfil', this.perfis);
      });
      modal.present();
    }
  
}
