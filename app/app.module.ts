import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app.router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from './api/in-memory-store.service';
import './core/rxjs-extensions';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { PostService } from './services/post.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent
  ],
  providers: [
   PostService
 ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
