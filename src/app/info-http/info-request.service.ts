import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import {Repository} from '../repository';



@Injectable()
export class InfoRequestService {

  user:User;
  repos=[];
  constructor(private http:HttpClient) {
    this.user= new User(0,"","",0,0,0);
   }
   infoRequest(){
     interface ApiResponse{
       name:string;
       avatar_url:string;
       followers:number;
       following:number;
       public_repos:number;
       repos_url:string;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.user.id++;
         this.user.name =response.name;
         this.user.picture =response.avatar_url;
         this.user.followers=response.followers;
         this.user.following=response.following;
         this.user.repositories=response.public_repos;
         resolve();
       },error=>{
         reject(error);
       })
     })
     return promise;
   }
   repoRequest(){
     interface ApiResponse2{
      name:string;
      description:string;
      language:string;
      forks:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse2>(environment.apiUrl2).toPromise().then(response=>{
        for(let i=0;i<response["length"];i++){
          let newRepo= new Repository(0,"","","",0,"");
          newRepo.repoId = i+1;
        newRepo.repoName = response[i].name;
        newRepo.description = response[i].description;
        newRepo.language = response[i].language;
        newRepo.forks = response[i].forks;
        newRepo.url = response[i].html_url;
        this.repos.push(newRepo);
        }
        resolve();
      },error=>{
        reject(error);
      })
    })
    return promise;
   }
}
