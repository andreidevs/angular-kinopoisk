import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {FilmsPageComponent} from "./pages/films-page/films-page.component";

const routes: Routes = [
  {path: '', component: FilmsPageComponent},
  {path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
