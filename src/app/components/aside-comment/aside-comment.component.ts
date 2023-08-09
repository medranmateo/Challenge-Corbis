import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aside-comment',
  templateUrl: './aside-comment.component.html',
  styleUrls: ['./aside-comment.component.css']
})
export class AsideCommentComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe((data: any) => {
      this.commentData = data.comments;
      console.log(this.commentData)

    });

  }

  //@Input('commentData') commentData: any = { };

  commentData: any
	asideComment: boolean = false
	globe: number = 0;


  showOrHide(){
    this.asideComment = !this.asideComment
  }


}

