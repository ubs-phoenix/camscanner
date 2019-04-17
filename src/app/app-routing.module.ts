import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './pages/camera/camera.component';
import { QrscannerComponent } from './pages/qrscanner/qrscanner.component';

const routes: Routes = [
  {
    path: 'camera',
    component: CameraComponent,
    pathMatch: 'full',
  },
  {
    path: 'qr-scanner',
    component: QrscannerComponent,
  },
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
