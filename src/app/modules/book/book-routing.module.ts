import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookTypesComponent } from './components/book-types/book-types.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Routes = [
  {
    path: 'book/:category',
    component: BookTypesComponent,

    children: [{ path: ':type', component: BookListComponent }],
  },
  {
    path: 'book',
    component: BookListComponent,
  },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'cart-details/:id', component: CartDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
