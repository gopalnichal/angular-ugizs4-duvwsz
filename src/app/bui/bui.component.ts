import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { WorklistComponent } from "../worklist/worklist.component";

@Component({
  templateUrl: "./bui.component.html"
})
export class BuiComponent implements OnInit {
  @ViewChild("dynamicInsert", { static: true, read: ViewContainerRef })
  dynamicInsert: ViewContainerRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ viewName, worklist }) => {
      if (viewName == "dashboard") {
        this.createDynamicComponent(DashboardComponent, viewName);
      } else if (
        (viewName == "customer" || viewName == "customergroup") &&
        worklist == "worklist"
      ) {
        this.createDynamicComponent(WorklistComponent, viewName);
      }
    });
  }

  createDynamicComponent(component, props) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    if (this.dynamicInsert) {
      this.dynamicInsert.clear();
    }
    const dyynamicComponent = this.dynamicInsert.createComponent(
      componentFactory
    ).instance;
    dyynamicComponent["props"] = props;
  }
}
