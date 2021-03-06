import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {
  perfil: any;

  constructor(public modalController: ModalController, private camera: Camera,
    private http: HttpClient, public loadingController: LoadingController,
    private perfilService: PerfilService) {
    this.perfil = {
      'avatar': '',
      'nome': '',
      'idade': '',
      'likes': 0
    }
  }

  ngOnInit() {
  }
  
  add() {
   this.modalController.dismiss(this.perfil)
  }

  //Onde vai ser criado a parte da camera
  take_picture() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.perfil.avatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }
}
