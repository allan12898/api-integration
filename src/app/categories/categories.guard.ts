import { Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from './categories.service';
import { ICategory } from './icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesGuard implements CanActivate, OnInit {


  categories: ICategory[] =[]
  category: number
  errorMsg: string
  constructor(private router: Router, private http: CategoriesService) {

  }
  ngOnInit() {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var id = +route.url[1].path

    if (isNaN(id)) {
      alert("invalid id");
      this.router.navigate(['/categories']);
      return false;
    }
    else {
      this.http.getCategories(id.toString()).subscribe(data => {
        this.categories = data;
        if (this.categories == null) {
          alert("invalid id");
          this.router.navigate(['/categories']);
          return false;
        };
      }
        , error => this.errorMsg = error)
    }


    return true;
  }

}
