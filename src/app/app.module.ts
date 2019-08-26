import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserComponent } from './user/user.component';
import { NgProgressModule} from '@ngx-progressbar/core';
import { NgProgressHttpModule} from '@ngx-progressbar/http';
import { RepositoryComponent } from './repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    UserComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
