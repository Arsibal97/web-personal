import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DialogoFotoComponent } from "../components/dialogo-foto/dialogo-foto.component";
import { ModoNocheComponent } from "../modo-noche/modo-noche.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, DialogoFotoComponent, ModoNocheComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
