import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md'; // material design

import { AgmCoreModule } from '@agm/core';  // google maps

// import { currentUserReducer } from './app.reducers';

import { routing } from './app.routes';

// import app modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AuthGuard } from './core/auth.guard'
import { AuthService } from './core/auth.service'

// import app services
import { UserService } from './core/user.service';
import { ArtigianiService } from './shared/artigiani.service';

// import app modules
import { CandidatoModule } from './candidato/candidato.module';

// import app components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MappaComponent } from './mappa/mappa.component';
import { ListaComponent } from './lista/lista.component';
import { SchedaComponent } from './scheda/scheda.component';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MappaComponent,
    ListaComponent,
    SchedaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    // StoreModule.provideStore({ currentUser: currentUserReducer }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC45PANgWInFrLUmM0z7u_QkqrsQYEmdv4'
    }),
    //StoreDevtoolsModule.instrumentOnlyWithExtension({
    //  maxAge: 5
    //}),

    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    CandidatoModule,
    routing
  ],
  schemas: 
    [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthGuard,
    AuthService,
  	UserService,
    ArtigianiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
