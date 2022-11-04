import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { PaginatorModule } from "primeng/paginator";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TableModule, HttpClientModule, PaginatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
