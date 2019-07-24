import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

@Input() post: Post;


  constructor(private postsService: PostsService) { }

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
  this.postsService.removePost(this.post) ;

  }



}

