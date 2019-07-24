import * as firebase from 'firebase';


export class Post {

  title:string;
  content:string;
  loveIts : number;
  created_at : object;

      constructor(  title:string, content:string )
      {
                this.title=title;
                this.content=content;
                this.loveIts=0;
                this.created_at  = firebase.database.ServerValue.TIMESTAMP;
            }

}
