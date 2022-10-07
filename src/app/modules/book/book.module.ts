import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookTypesComponent } from './components/book-types/book-types.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookTypesComponent,
    CartDetailsComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule, BookRoutingModule, MaterialModule, FormsModule],
})
export class BookModule {}
