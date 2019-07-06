import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { Storage } from '@ionic/storage';
import { PerfilService } from '../services/perfil.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis: any;

  constructor(public toastController: ToastController,
    public modalController: ModalController, private storage: Storage,
    public alertController: AlertController, private perfilService: PerfilService,
    public loadingController: LoadingController) {
    this.perfis = [];
    //Loading
    this.loadingController.create({
      message: 'Hellooo',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.perfilService.list().subscribe(
        (data) => {
          this.perfis = data;
          loader.dismiss();
        }
      )
    });
  }

  //Contagem de Likes
  likes(perfil) {
        //post para essa url ai, desse contato ai
    //Loading
    this.loadingController.create({
      message: 'OK',
    }).then((loader) => {
      loader.present();
      perfil.likes = perfil.likes + 1;
      // retorna o observeibon
      this.perfilService.edit(perfil).subscribe(
        (data) => {
          loader.dismiss();
        }
      )
    });

  }

  add(perfil) {
    //post para essa url ai, desse contato ai
    //Loading
    this.loadingController.create({
      message: 'OK',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.perfilService.add(perfil).subscribe(
        (data) => {
          this.perfis.push(perfil)
          loader.dismiss();
        }
      )
    });
  }

  // Exclui o conteúdo
  remove(perfil) {
    //Loading
    this.loadingController.create({
      message: 'REMOVIDO COM SUCESSO',
    }).then((loader) => {
      loader.present();
      // retorna o observeibon
      this.perfilService.remove(perfil).subscribe(
        (data) => {
          var i = this.perfis.indexOf(perfil);
          this.perfis.splice(i, 1);
          loader.dismiss();
        }
      )
    });
  }
  // Criação do Modal, onde ele irá abrir o modal
  async abrir_modal() {
    const modal = await this.modalController.create({
      component: PerfilModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((perfil) => {
      this.add(perfil.data)
    })
  }

}
