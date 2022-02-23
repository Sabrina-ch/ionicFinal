import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.scss'],
})
export class ProductoEditarComponent implements OnInit {
  sub: any | undefined;
  id: any | undefined;
  nombre: any | undefined;
  mail: any | undefined

  constructor(private ruteo:Router,private _Activatedroute:ActivatedRoute, private servicio:ProductoServicioService,private loading:LoadingController) { }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params =>
      { (this.id= params.get('id')); 
       (this.nombre=params.get('nombre')); 
       (this.mail=params.get('mail'));
     });
  }

  editarUsuario(){
       this.loadGuardar();   
      const usu = {id:this.id,nombre:this.nombre, mail:this.mail}
      this.servicio.editarDatosUsuario(usu).subscribe( data => {
      let datos = Object.values(data);
      console.log(usu);
      if(datos[0] == true){
        
        this.ruteo.navigateByUrl("/productos");
    
      }else{
        console.log("false")
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

}
