import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items2: Observable<any>;
  activeMenu: string = "";

  constructor(fs: AngularFirestore) {
    // this.items2 = fs.collection("items").valueChanges();
    // this.items2.subscribe(value => {
    //   console.log(value);
    // });
  }

  OpenCloseMenu(menuState: string) {
    console.log(menuState);

    if (menuState == "Open") this.activeMenu = "activeMenu";
    else this.activeMenu = "";
  }
}
