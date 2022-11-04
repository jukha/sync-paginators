import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
    <p-paginator
      [showFirstLastIcon]="false"
      [rows]="10"
      [totalRecords]="30"
    ></p-paginator>
    <br /><br /><br /><br /><br />
    <p-paginator
      [showFirstLastIcon]="false"
      [rows]="10"
      [totalRecords]="30"
    ></p-paginator>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {}
  ngOnInit() {}
}
