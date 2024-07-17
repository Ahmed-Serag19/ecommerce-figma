import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FloatLabelModule,
    InputTextModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
  });
  imagePath: string = 'assets/images/log-reg.png'; // Update with the correct path

  onSubmit(): void {
    console.log('Login');
  }
}
