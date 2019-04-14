import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GeneralService {
  alertMsg = new BehaviorSubject<Alert>({ msg: "", type: "success" });
  constructor() {}

  setAlertMsg(alertMsg: Alert) {
    var that = this;
    this.alertMsg.next(<Alert>alertMsg);
    if (alertMsg.timeout) {
      setTimeout(
        function() {
          that.alertMsg.next(<Alert>{ msg: "", type: alertMsg.type ? alertMsg.type : "success" });
        },
        <number>alertMsg.timeout
      );
    }
  }
  getAlertMsg(): Observable<Alert> {
    return this.alertMsg.asObservable();
  }
}

interface Alert {
  msg: String;
  type?: String;
  timeout?: Number;
  closable?: boolean;
}
