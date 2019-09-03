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
import { DeletePopupComponent } from './dialog/delete-popup/delete-popup.component';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    ItemComponent,
    NewPostComponent,
    DeletePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
  PostsService
  ],

    entryComponents: [
      DeletePopupComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
