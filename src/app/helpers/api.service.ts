import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Entidades/usuario';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    api:string;
     
  constructor(private http:HttpClient) { 
    this.api='http://localhost:666/usuario/registro';
    this.api="https://tiendapiaedi.herokuapp.com/"
  }

  

  loguear(usu:any): Observable<any>{
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post('https://tiendapiaedi.herokuapp.com/usuario/login',usu, {'headers': headers});
  }

  registrar(usu:any): Observable<any>{
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.post('https://tiendapiaedi.herokuapp.com/usuario/registro',usu, {'headers': headers});
  }

 


  }

