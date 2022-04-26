import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UseridComponent } from './userid/userid.component';
import { HttpClientModule } from '@angular/common/http';
import { SubModule } from './sub.module';
import { kelvinPipe } from './kelvin.pipe';
import { CustomPipe } from './custom.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NotfoundComponent,
    UseridComponent,
    kelvinPipe,
    CustomPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
