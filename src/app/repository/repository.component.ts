import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoRequestService} from '../info-http/info-request.service';
import {Repository} from '../repository';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers:[InfoRequestService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoName="";
  repositories:Repository[]=[];
  show=false;
  showRepository(){
    this.show=true;
    this.infoService.repoNameRequest(this.repoName);
    this.repositories=this.infoService.repositories;
  }
  constructor(private infoService:InfoRequestService) { }
  ngOnInit() {
  }
}
