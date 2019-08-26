import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import { Repository } from '../repository';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})

export class MyprofileComponent implements OnInit {
  user: User;
  repoCount;
  repos = [];
  userId = 0;
  repoId = 0;
  reposUrl: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
      repos_url: string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/hkawinzi?access_token=f60547066bc006c0eb45277bd46177ad902d800d").subscribe(data => {
      this.user = new User(this.userId++, data.name, data.avatar_url, data.followers, data.following, data.public_repos)
      this.reposUrl = data.repos_url;
    })
    interface ApiResponse2 {
      name: string;
      description: string;
      language: string;
      forks: number;
      html_url: string;
    }
    this.http.get<ApiResponse2>("https://api.github.com/users/hkawinzi/repos?access_token=f60547066bc006c0eb45277bd46177ad902d800d").subscribe(data => {
      for (let i = 0; i < data["length"]; i++) {
        let newRepo = new Repository(0, "", "", "", 0, "");
        newRepo.repoId = i + 1;
        newRepo.repoName = data[i].name;
        newRepo.description = data[i].description;
        newRepo.language = data[i].language;
        newRepo.forks = data[i].forks;
        newRepo.url = data[i].html_url;
        this.repos.push(newRepo);
      }
    })


  }

}