import { Component, Input } from '@angular/core';
import { animateFactory } from 'ng2-animate';

@Component({
  selector: 'loading',
  templateUrl: 'loading.html',
  animations: [animateFactory(150, 200, 'ease-out')]
})
export class LoadingComponent {

  @Input() isBusy: boolean = false;

  constructor() {

  }

}
