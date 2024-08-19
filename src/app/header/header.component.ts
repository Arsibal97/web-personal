  import { Component } from '@angular/core';
  import { Router } from "@angular/router";
import { DialogoFotoComponent } from "../components/dialogo-foto/dialogo-foto.component";
import { ModoNocheComponent } from "../modo-noche/modo-noche.component";

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [DialogoFotoComponent, ModoNocheComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
  })
  export class HeaderComponent {
    constructor(private router:Router){}

    navigateToExperience() {
      this.router.navigate(['/experience']);
    }

    navigateToContact() {
      this.router.navigate(['/contact']);
    }

    navigateToPortfolio() {
      this.router.navigate(['/portfolio']);
    }

  }
