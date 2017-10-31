import { RouterModule, Routes } from '@angular/router';

//import { CandidatoComponent } from './candidato/candidato.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MappaComponent } from './mappa/mappa.component';
import { ListaComponent } from './lista/lista.component';
import { SchedaComponent } from './scheda/scheda.component';

import { AuthGuard } from './core/auth.guard'

const routes: Routes = [
  { 
    path: '', 
    component: MappaComponent,
    pathMatch: 'full'
  },
  /*{ 
  	path: 'candidato', 
  	component: CandidatoComponent, // full load; ?? how to lazy load ??
    canActivate: [AuthGuard]
  },*/
  { 
  	path: 'signup', 
  	component: SignupComponent,
    data: {
      showHeader: false
    }
  },
  { 
    path: 'signin',
    component: SigninComponent,
    data: {
      showHeader: false
    }
  },
  { 
    path: 'signout',
    component: SigninComponent,
  },
  { 
    path: 'mappa',
    component: MappaComponent,
  },
  { 
    path: 'artigiani',
    component: ListaComponent,
  },
  { 
    path: 'artigiani/:id',
    component: SchedaComponent,
  },
  { 
    path: "**", 
    component: SigninComponent, 
  }
];

export const routing = RouterModule.forRoot(routes);
