import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor (private formBuilder: FormBuilder) {}

  onSubmitLoginForm(): void {
    console.log('DADOS DO FORMULÁRIO DE LOGIN:', this.signupForm.value);
  }

}
