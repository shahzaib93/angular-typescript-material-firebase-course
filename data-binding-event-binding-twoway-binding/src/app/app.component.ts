import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "SOme data to bind";
  val1: string;
  constructor() {
    console.log(this.val1);
  }
  func1(): void {
    console.log("Show alert!");
  }
}
