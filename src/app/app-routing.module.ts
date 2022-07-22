import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './page/departement/departement.component';
import { RegionComponent } from './page/region/region.component';

const routes: Routes = [
  { path: '', component: RegionComponent },
  { path: 'departement', component: DepartementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
