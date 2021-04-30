import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  @Input() props: string;
}
