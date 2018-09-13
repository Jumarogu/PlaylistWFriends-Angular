import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Browser } from 'protractor';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { JoinComponent } from './join/join.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    GetComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  providers: [{provide : NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule { }
