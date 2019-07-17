import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesGuard } from './categories/categories.guard';


const routes: Routes = [
  {path:"categories", component: CategoriesComponent},
  {path:"categories/:id", component: CategoriesComponent, canActivate: [CategoriesGuard]},
  {path:"", redirectTo: "categories", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
