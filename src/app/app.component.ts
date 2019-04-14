import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { GeneralService } from "./services/general.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items2: Observable<any>;
  activeMenu: String = "";
  successMsg: String = "";
  failureMsg: String = "";

  constructor(private gs: GeneralService /*fs: AngularFirestore*/) {
    // this.successMsg = gs.getSuccessMsg();
    // this.items2 = fs.collection("items").valueChanges();
    // this.items2.subscribe(value => {
    //   console.log(value);
    // });
    gs.setAlertMsg({ msg: "ff", timeout: 2000, type: "failure" });
  }

  ngOnInit() {
    this.gs.getAlertMsg().subscribe(val => {
      if (val.type == "failure") this.failureMsg = val.msg;
      else this.successMsg = val.msg;
    });
  }

  OpenCloseMenu(menuState: string) {
    console.log(menuState);
    if (menuState == "Open") this.activeMenu = "activeMenu";
    else this.activeMenu = "";
  }

  // subscribeSuccessAlert() {
  //   this.showSuccessAlert("sdsdsdsdsdsdsd");
  // }

  // showSuccessAlert(message: String) {
  //   var that = this;
  //   that.successMsg = message;
  //   setTimeout(function() {
  //     that.gs.setSuccessMsg("");
  //     that.successMsg = that.gs.getSuccessMsg();
  //   }, 3000);
  // }
}
