import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }
  
  URL_BASE = "https://5d14082b76f3f5001415f489.mockapi.io/Perfil/";
  
  list() {
    return this.http.get(this.URL_BASE);
  }

  add(perfil) {
    return this.http.post(this.URL_BASE, perfil.id)
  }

  remove(perfil) {
    return this.http.delete(this.URL_BASE  + perfil.id)
  }


}
