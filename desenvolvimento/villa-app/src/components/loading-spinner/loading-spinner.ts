import {Component, Input} from '@angular/core';
import { animateFactory } from "ng2-animate";

@Component({
  selector: 'loading-spinner',
  templateUrl: 'loading-spinner.html',
  animations: [animateFactory(150, 200, 'ease-out')]
})
export class LoadingSpinnerComponent {

  @Input() isBusy: boolean = false;

  constructor() {

  }

}
