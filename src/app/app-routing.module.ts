import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' }, // <-- Comment this line to get e2e tests to work
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
