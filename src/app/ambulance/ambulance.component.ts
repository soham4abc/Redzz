import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ambulance",
  templateUrl: "./ambulance.component.html",
  styleUrls: ["./ambulance.component.scss"],
})
export class AmbulanceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  search(e) {
    let searched = document.getElementById("search").nodeValue.trim();
    if (searched !== "") {
      let text = document.getElementById("text").innerHTML;
      let re = new RegExp(searched, "g");
      let newText = text.replace(re, `<mark>${searched}</mark>`);
      document.getElementById("text").innerHTML = newText;
    }
  }
}
