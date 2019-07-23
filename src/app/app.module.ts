import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { ItemComponent } from './post-list/item/item.component';
import { NewPostComponent } from './post-list/new-post/new-post.component';

import {PostsService} from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    ItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [
  PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
