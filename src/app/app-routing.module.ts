import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/aboutus.component';
import { BuyComponent } from './components/buy/buy.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentComponent } from './components/rent/rent.component';
import { ServicesComponent } from './components/services/services.component';
import { BookListComponent } from './modules/book/components/book-list/book-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          { path: 'buy', component: BuyComponent },
          { path: 'rent', component: RentComponent },
        ],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuardService],
  },
  // load module lazily using loadChildren
  // specify the path of the module using import and also the module name
  {
    path: 'cart-details',
    loadChildren: () =>
      import('./features/cart/cart.module').then((c) => c.CartModule),
  },
  {
    path: 'order-details',
    loadChildren: () =>
      import('./features/orders/orders.module').then((o) => o.OrdersModule),
  },
  {
    path: 'payment-details',
    loadChildren: () =>
      import('./features/payments/payments.module').then(
        (m) => m.PaymentsModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
