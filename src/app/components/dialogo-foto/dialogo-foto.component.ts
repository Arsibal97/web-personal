import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialogo-foto',
  templateUrl: './dialogo-foto.component.html',
  styleUrls: ['./dialogo-foto.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],})
export class DialogoFotoComponent {
  idioma: string = 'es'; // Idioma inicial

  toggleIdioma(): void {
    this.idioma = this.idioma === 'es' ? 'en' : 'es';
  }
  }
