import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"],
})
export class ChildComponentComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
