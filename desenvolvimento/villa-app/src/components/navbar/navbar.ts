import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  imageLogo: string = "data:image/png;base64,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";

  constructor() {

  }

}
