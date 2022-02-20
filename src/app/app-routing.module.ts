import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ProductoEditarComponent } from './componentes/producto-editar/producto-editar.component';
import { ProductosBmComponent } from './componentes/productos-bm/productos-bm.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
/*import { VerificadorGuard } from './helpers/verificador.guard';*/

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'login',component:LoginComponent},
  {path:'producto-editar/:nombre/:mail/:id',component:ProductoEditarComponent},
  {path:'productos-bm',component:ProductosBmComponent},
  {path:'registro',component:RegistroComponent},
  {path:'productos',component:ProductosComponent/*,canActivate:[VerificadorGuard]*/},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
