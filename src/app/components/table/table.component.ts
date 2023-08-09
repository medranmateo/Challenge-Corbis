import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { Objective } from 'src/app/models/objective.model';
import { Perspective } from 'src/app/models/perspective.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {}


  ngOnInit(): void {

    this.dataService.getData().subscribe((data: any) => {
      this.perspectives = data.perspectives;
      this.objectives = data.objectives;
      this.comments = data.comments;
      //console.log(this.comments)
    });
  }


  public perspectives: Perspective[] = []
  public objectives: Objective[] = []
  public comments: Comment[] = []
  public page = 1;
	public pageSize = 3


  searchKeyword = '';
  currentPage = 1;
  itemsPerPage = 5;

  search(): void {
    this.currentPage = 1;
  }

  getPaginated(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.objectives.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.objectives.length / this.itemsPerPage);
  }

}
