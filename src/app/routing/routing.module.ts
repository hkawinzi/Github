import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MyprofileComponent} from '../myprofile/myprofile.component';
import { UserComponent} from '../user/user.component';
import { RepositoryComponent} from '../repository/repository.component';
const routes:Routes=[
  {path:"myprofile", component:MyprofileComponent},
  {path:"user", component:UserComponent},
  {path:"repository",component:RepositoryComponent},
  {path:"",redirectTo:"/myprofile",pathMatch:"full"}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
