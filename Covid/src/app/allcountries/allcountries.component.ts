import { Component, OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-allcountries",
  templateUrl: "./allcountries.component.html",
  styleUrls: ["./allcountries.component.scss"],
})
export class AllcountriesComponent implements OnChanges {
  @Input() allCountriesData: any;
  constructor() {}

  ngOnChanges() {
    this.allCountriesData.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
    // console.log(this.allCountriesData);
  }
}
