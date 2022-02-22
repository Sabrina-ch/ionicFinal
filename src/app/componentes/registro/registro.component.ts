import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService } from 'src/app/helpers/api.service';
import { LoadingController } from '@ionic/angular';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  usuario = new Usuario;
  mensaje!: string;

  constructor(private ruta: Router, private servicioApi: ProductoServicioService, public loading: LoadingController) { }

  registro() {

    const usu = { nombre: this.usuario.nombre, mail: this.usuario.mail, clave: this.usuario.clave };
    this.loadGuardar();
    this.servicioApi.enviarDatosNuevos(usu).subscribe(data => {
      if (data['success'] == true) {
        this.ruta.navigateByUrl("/login");
      }
      else {
        data['message'];
      }

    }
    );

  }

  async loadGuardar() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'guardando cambios...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('cambios guardados');
  }

  ngOnInit() { }

}
