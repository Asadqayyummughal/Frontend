import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatdialogDemoComponent } from './matdialog-demo/matdialog-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatdialogDemoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule ,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
