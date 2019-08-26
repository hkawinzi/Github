import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MyprofileComponent} from '../app/myprofile';
import { UserComponent} from '../user/user.component'

const routes:Routes=[
  {path:"myprofile", component:MyprofileComponent},
  {path:"user", component:UserComponent},
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