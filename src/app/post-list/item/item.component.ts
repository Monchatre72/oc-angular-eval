import { Component, OnInit, Input, Inject } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DeletePopupComponent } from '../../dialog/delete-popup/delete-popup.component';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

@Input() post: Post;


  constructor(private postsService: PostsService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onIncreaseLoveIts(){
    this.post.loveIts++;
    this.postsService.updatePosts();
    console.log('nombre de loveIts :' + this.post.loveIts );
  }

  onDecreaseLoveIts(){
    this.post.loveIts--;
    this.postsService.updatePosts();
    console.log('nombre de loveIts :' + this.post.loveIts );
  }
  onRemoveItem(){

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
        title: this.post.title
        }
    this.dialog.open(DeletePopupComponent,
     dialogConfig
     // data: {
       // title: this.post.title
     // }
    );

  //this.postsService.removePost(this.post) ;

  }



}

