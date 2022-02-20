import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../Entidades/usuario';

@Pipe({
  name: 'transformacion'
})
export class TransformacionPipe implements PipeTransform {

  transform(value:Array<Usuario>, filtro: string):Array<Usuario>{
    if(!value) return [];
    if(!filtro) return value; 
    
   
    const usuario =[]; 
    for( const Usuario of value){
      var nombreMin= Usuario['nombre'].toLowerCase(); 
      var numeroMailUsu =Usuario['mail'].toLowerCase();
     
      if(nombreMin.includes(filtro) || numeroMailUsu.includes(filtro)){
        usuario.push(Usuario);
      }
      /*if(numeroMailUsu.includes(filtro)){
        usuario.push(Usuario);
      }*/
    }

    return usuario;
  }

}
