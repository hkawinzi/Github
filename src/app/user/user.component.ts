import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {InfoRequestService} from '../info-http/info-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[InfoRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName="";
  user:User;
  show=false;
  show1=false;
  repos=[];
  showUser(){
    this.show=true;
    this.infoService.infoRequest(this.userName);
    this.user=this.infoService.user;
  }
  showRepo(){
    this.show1=true;
    this.infoService.repoRequest(this.userName);
    this.repos=this.infoService.repos;
  }
  // user= new User(0,"","",0,0,0);
  constructor(private infoService:InfoRequestService) { }

  ngOnInit() {
    // this.infoService.infoRequest(this.userName);
    // this.user=this.infoService.user;

  }

}
