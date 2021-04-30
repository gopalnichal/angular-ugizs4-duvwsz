import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./worklist.component.html"
})
export class WorklistComponent {
  @Input("props") props: string;
}
