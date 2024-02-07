import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, BadgeModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    BadgeModule
  ]
})
export class PagesModule {
}
