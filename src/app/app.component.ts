import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'celestica-test-01';

  constructor(
    public router: Router,
  ) { }

  navigateTo(url: string): void {
    switch (url) {
      case 'sign-up':
        this.router.navigate(['/sign-up'])
        break
      case 'product':
        this.router.navigate(['/product'])
        break
      case 'number-converter':
        this.router.navigate(['/number-converter'])
        break
      default:
        alert('Please check your url link again.')
        break
    }
  }
}
