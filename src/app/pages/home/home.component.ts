import { Component, OnInit } from '@angular/core';
import { Objective } from 'src/app/models/objective.model';
import { Perspective } from 'src/app/models/perspective.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    // this.dataService.getData().subscribe((data: any) => {
    //   this.perspectives = data.perspectives;
    //   this.objectives = data.objectives;
    //   this.comments = data.comments;

    //   console.log(this.comments)
    // });
  }

  public perspectives: Perspective[] = [];
  public objectives: Objective[] = [];
  public comments: Comment[] = [];


}



