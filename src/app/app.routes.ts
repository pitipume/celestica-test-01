import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'product', component: ProductComponent }
];
