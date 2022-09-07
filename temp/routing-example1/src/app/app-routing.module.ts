import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
    { path : 'house', component : HouseComponent },
    { path : 'office', component : OfficeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
