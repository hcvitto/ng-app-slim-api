import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { currentUserReducer } from './app.reducers';

import { routing } from './app.routes';

// import app modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AuthGuard } from './core/auth.guard'
import { AuthService } from './core/auth.service'

// import app services
import { UserService } from './core/user.service';

// import app modules
import { CandidatoModule } from './candidato/candidato.module';

// import app components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ currentUser: currentUserReducer }),
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    CandidatoModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
  	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
