import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmfLibButtonModule } from 'arq-mf-weblib';
import { AmfLibLinkModule } from 'arq-mf-weblib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmfLibLinkModule,
    AmfLibButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
