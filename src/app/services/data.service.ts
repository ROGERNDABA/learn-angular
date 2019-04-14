import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
// import { HttpModule } from '@angular/http';
// import { importExpr } from '@angular/compiler/src/output/output_ast';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {
    console.log("data service initialized...");
  }
}
