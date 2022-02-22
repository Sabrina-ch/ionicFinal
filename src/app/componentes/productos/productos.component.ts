import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  usuarios!: Array<Usuario>;
  dato!: string;
  usuario = new Usuario;
  buscar!: string;

  constructor(private router: Router, private servicio: ProductoServicioService, public alert: AlertController) {
    this.servicio.traerUsuarios().subscribe(resultado => { this.usuarios = <Array<Usuario>>resultado });
  }

  ngOnInit() { }

  /*eliminar(value: any){
    this.dato = value;
     const id = {id: this.dato}
     console.log(id);
        this.servicio.eliminarUsuario(id).subscribe( data => {
        let datos = Object.values(data);
       if(datos[0] == true){
         window.location.reload();
       }else{
          console.log("false")
         }
        });
         }*/

  async alerta(value: any) {
    let alerta = await this.alert.create({
      header: 'Advertencia',
      message: '¿realmente desea eliminar este usuario?',
      buttons: [{
        text: 'si',
        role: 'si',
        id: 'cancel-button',
        handler: () => {
          this.dato = value;
          const id = { id: this.dato }
          console.log(id);
          this.servicio.eliminarUsuario(id).subscribe(data => {
            let datos = Object.values(data);
            if (datos[0] == true) {
              window.location.reload();
            } else {
              console.log("false")
            }
          });

        }

      }, {
        text: 'no',
        role: 'no',
        handler: () =>
          console.log('usuario no eliminado')
      }],
    });

    await alerta.present();


  }

  salir() {
    sessionStorage.removeItem("usuario");
    this.router.navigate(["/home"]);
    console.log('sesión finalizada');


  }




}
