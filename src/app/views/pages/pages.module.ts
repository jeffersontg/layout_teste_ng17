import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';
import { BadgeComponent, BadgeModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    SignupComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    BadgeModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule
  ]
})
export class PagesModule {
}
