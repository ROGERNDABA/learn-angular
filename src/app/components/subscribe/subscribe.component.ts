import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"]
})
export class SubscribeComponent implements OnInit {
  successMsg: String = "";
  failureMsg: String = "";
  constructor(private gs: GeneralService) {}

  ngOnInit() {
    this.gs.getAlertMsg().subscribe(val => {
      if (val.type == "failure") this.failureMsg = val.msg;
      else this.successMsg = val.msg;
    });
  }

  subscribeSuccessAlert(event: Event) {
    event.preventDefault();
    this.gs.setAlertMsg({ msg: "sdsdsdsdsdddddddddd", timeout: 3000, type: "success" });
  }
}
