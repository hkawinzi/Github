import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../myprofile';
import {Repository} from '../repository';
import {InfoRequestService} from '../info-http/info-request.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  providers:[InfoRequestService],
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user:User;
  repos=[];
  show = false;
  constructor(private infoService:InfoRequestService) { }
  showRepo(){
    this.show=true;
  }
  ngOnInit() {
    this.infoService.infoRequest("hkawinzi");
    this.user=this.infoService.user;
    this.infoService.repoRequest("hkawinzi");
    this.repos=this.infoService.repos;
  }

}
