import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: []
})
export class SignupComponent {

  signupForm = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor (private formBuilder: FormBuilder) {}

  onSubmitSignupForm(): void {
    console.log('DADOS DO FORMULÁRIO DE LOGIN:', this.signupForm.value);
  }

}
