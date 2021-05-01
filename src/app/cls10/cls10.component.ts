import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cls10",
  templateUrl: "./cls10.component.html",
  styleUrls: ["./cls10.component.scss"],
})
export class Cls10Component implements OnInit {
  constructor(public toastr: ToastrService) {}

  ngOnInit() {}

  showSuccess() {
    this.toastr.success("This is a success toastr message!", "Success");
  }
  showInfo() {
    this.toastr.info("This is an info toastr message!", "Info");
  }
  showWarning() {
    this.toastr.warning("This is a warning toastr message!", "Warning");
  }
  showError() {
    this.toastr.error("This chapter is not yet uploaded!! ", "Error");
  }
  showToastr(positionClass) {
    this.toastr.info("Hello world!", "Toastr fun!", {
      positionClass,
    });
  }
}
