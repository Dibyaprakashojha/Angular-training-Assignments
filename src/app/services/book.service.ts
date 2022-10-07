import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { TypeView } from '../models/type-view';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _baseurl = 'http://localhost:8088/book-api/books';

  constructor(private _httpClient: HttpClient) {}

  getBooks = (): Observable<Book[]> => {
    return this._httpClient.get<Book[]>(this._baseurl);
  };

  getById = (id: number): Observable<Book> => {
    let url = `${this._baseurl}/book-id/${id}`;
    return this._httpClient.get<Book>(url);
  };

  getDistinctCategory = (): Observable<string[]> => {
    let url = `${this._baseurl}/category/distinct`;
    return this._httpClient.get<string[]>(url);
  };

  getDistinctType = (category: string): Observable<TypeView[]> => {
    let url = `${this._baseurl}/type/category/${category}`;
    return this._httpClient.get<TypeView[]>(url);
  };

  getByCategory = (category: string): Observable<Book[]> => {
    let url = `${this._baseurl}/category/${category}`;
    return this._httpClient.get<Book[]>(url);
  };

  getByType = (type: string): Observable<Book[]> => {
    let url = `${this._baseurl}/type/${type}`;
    return this._httpClient.get<Book[]>(url);
  };

  // add Books
  addBook = (book: Book): Observable<Book> => {
    return this._httpClient.post<Book>(this._baseurl, book);
  };

  //update Books
  updateBook = (book: Book): Observable<Book> => {
    return this._httpClient.put<Book>(this._baseurl, book);
  };

  //delete Books
  deleteBook = (id: number): Observable<Book> => {
    let url = `${this._baseurl}/book-id/${id}`;
    return this._httpClient.delete<Book>(url);
  };

  // get all Books
  getAllBooks = (): Observable<Book[]> => {
    let url = `${this._baseurl}`;
    return this._httpClient.get<Book[]>(url);
  };
}
