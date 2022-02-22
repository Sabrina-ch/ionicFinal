import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-productos-bm',
  templateUrl: './productos-bm.component.html',
  styleUrls: ['./productos-bm.component.scss'],
})
export class ProductosBmComponent implements OnInit {

  usuario = new Usuario;

  constructor(private ruteo: Router, private servicio: ProductoServicioService, private loading: LoadingController) { }


  agregarUsuario() {
    this.loadGuardar();
    const usu = { nombre: this.usuario.nombre, mail: this.usuario.mail, clave: this.usuario.clave };

    this.servicio.enviarDatosNuevos(usu).subscribe(data => {
      if (sessionStorage.getItem("usuario") != null) {
        this.ruteo.navigate(["/productos"]);
        console.log('agregado')
      }


    });
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
