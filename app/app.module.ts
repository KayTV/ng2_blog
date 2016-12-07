import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }     from './app.router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from './api/in-memory-store.service';
import './core/rxjs-extensions';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { PostsService } from './services/posts.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent
  ],
  providers: [
    PostsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
