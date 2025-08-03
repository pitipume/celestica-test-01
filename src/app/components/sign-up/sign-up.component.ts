import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor() {}
  signUp(event: any) {
    alert('Sign up completed!')
    console.log('event: ', event)
  }
}
