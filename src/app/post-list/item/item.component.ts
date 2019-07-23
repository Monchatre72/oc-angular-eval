import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

@Input() post: Post;


  constructor() { }

  ngOnInit() {
  }

  increaseLoveIts(){
    this.post.loveIts++;
  }

  decreaseLoveIts(){
    this.post.loveIts--;
  }


}

