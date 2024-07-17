import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.root.get('password');
    const rePassword = control.value;

    if (password && password.value !== rePassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FloatLabelModule,
    CommonModule,
    InputTextModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string | undefined;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(30),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z][a-z0-9!@#$%^&*]{7,20}$/
      ),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z][a-z0-9!@#$%^&*]{7,20}$/
      ),
      passwordMatchValidator(),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  imagePath: string = 'assets/images/log-reg.png';
  onSubmit() {
    console.log('Hello');
  }
}
