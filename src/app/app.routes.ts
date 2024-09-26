import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'products', component: ProductsComponent, title: 'Products Shop'},
    {path: 'product/:id', component: ProductComponent, title: 'Product Details'},
    {path: 'contact-us', component: ContactUsComponent, title: 'Contact Us'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
