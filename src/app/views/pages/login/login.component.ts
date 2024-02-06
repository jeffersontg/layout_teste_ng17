import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor (private formBuilder: FormBuilder) {}

  onSubmitLoginForm(): void {
    console.log('DADOS DO FORMULÁRIO DE LOGIN:', this.loginForm.value);
  }

}
