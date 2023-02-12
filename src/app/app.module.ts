import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { InitialComponent } from './components/home-page/components/initial/initial.component';
import { AboutUsComponent } from './components/home-page/components/about-us/about-us.component';
import { FeaturesComponent } from './components/home-page/components/features/features.component';
import { FaqComponent } from './components/home-page/components/faq/faq.component';
import { DownloadAppComponent } from './components/home-page/components/download-app/download-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    NaviComponent,
    FooterComponent,
    HomePageComponent,
    ContactComponent,
    DiscoverComponent,
    InitialComponent,
    AboutUsComponent,
    FeaturesComponent,
    FaqComponent,
    DownloadAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
