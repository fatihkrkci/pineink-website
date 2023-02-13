import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: "", pathMatch:"full", component: HomePageComponent },
  { path: "contact", component: ContactComponent },
  { path: "discover", component: DiscoverComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
