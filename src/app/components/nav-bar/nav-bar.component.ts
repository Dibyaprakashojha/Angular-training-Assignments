import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  brand!: string;

  categories!: string[];

  productCategory!: Book[];

  prodCat!: Book[];

  show = () => {
    console.log(this.brand);
  };

  constructor(private _bookService: BookService, private _router: Router) {}

  ngOnInit(): void {
    this._bookService.getDistinctCategory().subscribe({
      next: (data) => (this.categories = data),
    });
  }

  viewByCategory = (category: string) => {
    this._bookService.getByCategory(category).subscribe({
      next: (data) => (this.productCategory = data),
    });
    this._router.navigate(['/products', category]);
  };
}
