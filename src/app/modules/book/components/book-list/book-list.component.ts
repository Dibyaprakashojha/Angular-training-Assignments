import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  type!: string;

  displayedColumns = ['title', 'author'];

  // inject Router to navigate to other components

  constructor(
    private _bookService: BookService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // using paramMap
    this._activatedRoute.paramMap.subscribe((map) => {
      let typ = map.get('type');
      if (typ) this.type = typ;

      this._bookService.getByType(this.type).subscribe({
        next: (data) => {
          this.books = data;
        },
        complete: () => console.log(`completed successfully`),
      });
    });
  }

  onSubmit = (book: Book) => {
    // use router is to navigate to bookDetailsComponent
    this._router.navigate(['book-details', book.bookId]);
  };
}
