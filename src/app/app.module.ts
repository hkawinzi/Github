import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from '../app';
import { UserComponent } from './user/user.component';
import { NgProgressModule} from '@ngx-progressbar/core';
import { NgProgressHttpModule} from '@ngx-progressbar/http';
import { RepositoryComponent } from './repository/repository.component';
import { RoutingModule} from './routing/routing.module';
import { FormsModule} from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { BoldDirective } from './bold.directive';
import { DateOfCreationPipe } from './date-of-creation.pipe';


@NgModule({
  declarations: [
  
    AppComponent,
    MyprofileComponent,
    UserComponent,
    RepositoryComponent,
    BoldDirective,
    DateOfCreationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
