import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "subscribe", component: SubscribeComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
