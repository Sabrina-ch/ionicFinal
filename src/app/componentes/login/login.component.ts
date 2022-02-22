import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService} from 'src/app/helpers/api.service';
import { LoadingController,AlertController } from '@ionic/angular';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  

  usuario= new Usuario;
 
  respuestaLogin: string | undefined;


 /* usuario!:string;*/
 
  
  constructor(private ruteo:Router,private servicio:ApiService,public loading : LoadingController,public alerta:AlertController) {
  
   }

  

   

   login(){
    
    const usu={nombre:this.usuario.nombre,clave:this.usuario.clave};
    
    this.servicio.loguear(usu).subscribe( data => {
      
      if(data['success'] == false){
        this.alertaUsuario();
        this.ruteo.navigateByUrl('/login')
        this.respuestaLogin = data['message'];
        
      }else{
        this.load();
        this.respuestaLogin = data['message'];
        this.ruteo.navigate(['/productos']);
        
        
      }

       console.log(data); 
       /*sessionStorage.setItem("usuario",data)!= null
       this.ruteo.navigate(["/productos"]);*/
        
     }
     );
    }

    async load() {
      const loading = await this.loading.create({
        cssClass: 'my-custom-class',
        message: 'ingresando...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }
  
     async alertaUsuario(){
      let alert = await this.alerta.create({
        cssClass: 'my-custom-class',
        message: 'usuario no registrado',
        buttons:[{
          text:'OK',
         handler:()=>{
           window.location.reload();
         }}],
       
      });

      await alert.present();
        
      console.log('usuario no registrado');


    }

   
      
    
 
   
  ngOnInit(): void {

    
  }

  
  

}


