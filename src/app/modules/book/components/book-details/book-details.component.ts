import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookId!: number;
  book!: Book;
  cartArray: Book[] = [];
  // use ActivatedRoute to get the current activated route
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let ids = map.get('id');
      if (ids) this.bookId = Number(ids);
      this._bookService.getById(this.bookId).subscribe({
        next: (data) => (this.book = data),
      });
    });
  }

  addToCart = (book: Book) => {
    this.cartArray.push(book);
    this._router.navigate(['/cart-details', book.bookId]);
  };
}
