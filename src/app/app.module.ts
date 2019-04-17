import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrscannerComponent } from './pages/qrscanner/qrscanner.component';
import { MenubarComponent } from './pages/menubar/menubar.component';
import { CameraComponent } from './pages/camera/camera.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    QrscannerComponent,
    MenubarComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
