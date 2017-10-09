import { RouterModule, Routes } from '@angular/router';

import { CandidatoComponent } from './candidato/candidato.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { AuthGuard } from './core/auth.guard'
/*import { AnnunciComponent } from './annunci/annunci.component';*/

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'candidato',
    pathMatch: 'full'
  },
  { 
  	path: 'candidato', 
  	component: CandidatoComponent, // full load; ?? how to lazy load ??
    canActivate: [AuthGuard]
  },
  { 
  	path: 'signup', 
  	component: SignupComponent,
  },
  { 
    path: 'signin',
    component: SigninComponent,
  },
  { 
    path: 'signout',
    component: SigninComponent,
  },
 /* 
  { 
    path: 'formazione', 
    component: ,
    children; [
      {
        path: 'ricerca',
        component: 
      },
    ]
  },
  */
];

export const routing = RouterModule.forRoot(routes);
