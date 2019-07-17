import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { ICategory } from './icategory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : ICategory[];
  category : ICategory;
  id: number = this.routes.snapshot.params['id']
  errorMsg : string
  name: string;
  description: string
  constructor(private http: CategoriesService, private routes : ActivatedRoute) { }

  ngOnInit() {
      this.http.getCategories().subscribe(data =>
        this.categories = data , error => this.errorMsg = error)
  }
  addCategory(){
    this.category = {
      name: this.name,
      description : this.description
    }
    this.http.postCategory(this.category).subscribe(data => data ,error =>this.errorMsg = error )
  }



}
