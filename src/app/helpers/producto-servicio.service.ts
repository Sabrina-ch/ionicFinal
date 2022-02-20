import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {



 /* ruta!:string;*/
 
 
  constructor(private usuarioServ:HttpClient) {
    /*this.ruta ="https://tiendapiaedi.herokuapp.com";*/
   }

   /*traerUsuarios(){
          return this.usuarioServ.get('http://localhost:666/lista/traer');
  }*/

  traerUsuarios(){
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.usuarioServ.get('https://tiendapiaedi.herokuapp.com/lista/traer', {'headers': headers});
  }

   editarDatosUsuario(usu:any){
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
      return this.usuarioServ.put('https://tiendapiaedi.herokuapp.com/lista/modificar', usu);
    }

   
    enviarDatosNuevos(usu:any): Observable<any>{
      const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
      return this.usuarioServ.post('https://tiendapiaedi.herokuapp.com/lista/agregar',usu, {'headers': headers});
    }

    eliminarUsuario(id: any){
      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
      return this.usuarioServ.delete('https://tiendapiaedi.herokuapp.com/lista/eliminar', {'body': id});
    }
   }
 
  




