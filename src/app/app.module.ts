import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { NewsBoxComponent } from './news-box/news-box.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MainComponent, NewsBoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
