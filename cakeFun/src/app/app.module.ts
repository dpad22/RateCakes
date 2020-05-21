import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeNewComponent } from './cakeComponents/cake-new/cake-new.component';
import { CakelistComponent } from './cakeComponents/cakelist/cakelist.component';
import { CakeComponent } from './cakeComponents/cake/cake.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { CakeInfoComponent } from './cakeComponents/cake-info/cake-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeNewComponent,
    CakelistComponent,
    CakeComponent,
    CakeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
