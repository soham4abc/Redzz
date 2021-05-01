import { Component, Inject, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-cls12",
  templateUrl: "./cls12.component.html",
  styleUrls: ["./cls12.component.scss"],
})
export class Cls12Component implements OnInit {
  constructor(
    public toastr: ToastrService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

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
    //this.toastr.error('This chapter is not yet uploaded!! ', 'Error');
    //this.router.navigateByUrl('https://drive.google.com/drive/folders/0B7n4haXVPaDhfkhNMl9RRk12dE1LRDc0QlFGaDl5ZjlQQXNZRW5yTEd2MTNQX1BKd1pGYjg?usp=sharing');
    this.document.location.href =
      "https://drive.google.com/drive/folders/0B7n4haXVPaDhfkhNMl9RRk12dE1LRDc0QlFGaDl5ZjlQQXNZRW5yTEd2MTNQX1BKd1pGYjg?usp=sharing";
  }
  showToastr(positionClass) {
    this.toastr.info("Hello world!", "Toastr fun!", {
      positionClass,
    });
  }
}
