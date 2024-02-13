import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';


import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { LandingComponent } from './views/pages/landing/landing.component';
import { SignupComponent } from './views/pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login page'
    }
  },
  {
    path: 'landing',
    component: LandingComponent,
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Cadastro'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 400'
    }
  },
  {path: '**', redirectTo: 'login'}
  /*
  {
    path: 'loginPando',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
