import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductosBmComponent } from './componentes/productos-bm/productos-bm.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoEditarComponent } from './componentes/producto-editar/producto-editar.component';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HighlightDirective } from './directivas/highlight.directive';
import { TransformacionPipe } from './pipe/transformacion.pipe';



@NgModule({
  declarations:
   [AppComponent,
    LoginComponent,
    ProductosComponent,
    ProductosBmComponent,
    MenuComponent,
    ProductoEditarComponent,
    RegistroComponent,
    HighlightDirective,
    TransformacionPipe],
    
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
