import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DummyProductComponent } from './components/dummy-product/dummy-product.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    SignUpComponent, 
    DummyProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'celestica-test-01';
}
