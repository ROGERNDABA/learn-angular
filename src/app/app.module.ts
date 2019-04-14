import { environment } from "../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { HttpClientModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DataService } from "./services/data.service";
import { GeneralService } from "./services/general.service";
import { HomeComponent } from "./components/home/home.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, ArticlesComponent, SubscribeComponent /*, TestComponent*/],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule {}
