import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductlistdetailsComponent } from './productlistdetails/productlistdetails.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'list',component:ProductlistComponent,
  children:[
    {path:'details/:id',component:ProductlistdetailsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
