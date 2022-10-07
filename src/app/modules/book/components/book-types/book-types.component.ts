import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeView } from 'src/app/models/type-view';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-types',
  templateUrl: './book-types.component.html',
  styleUrls: ['./book-types.component.css'],
})
export class BookTypesComponent implements OnInit {
  category!: string;
  typeViews!: TypeView[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bookService: BookService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');
      if (cat) this.category = cat;
      this._bookService.getDistinctType(this.category).subscribe({
        next: (data) => (this.typeViews = data),
        complete: () => console.log(this.typeViews),
      });
    });
  }
}
