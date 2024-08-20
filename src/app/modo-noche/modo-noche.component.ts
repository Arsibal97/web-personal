import { Component, Renderer2, ElementRef } from '@angular/core';
@Component({
  selector: 'app-modo-noche',
  standalone: true,
  imports: [],
  templateUrl: './modo-noche.component.html',
  styleUrl: './modo-noche.component.css'
})
export class ModoNocheComponent {
  private isDarkMode = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    // Inicializa el estado del interruptor basándose en la clase del body
    const body = this.el.nativeElement.ownerDocument.body;
    this.isDarkMode = body.classList.contains('tema-oscuro');
    this.updateSwitchState();
  }

  cambio(): void {
    const body = this.el.nativeElement.ownerDocument.body;

    // Alternar entre tema claro y oscuro
    if (this.isDarkMode) {
      this.renderer.removeClass(body, 'tema-oscuro');
      this.renderer.addClass(body, 'tema-claro');
    } else {
      this.renderer.removeClass(body, 'tema-claro');
      this.renderer.addClass(body, 'tema-oscuro');
    }

    // Alternar el estado del interruptor
    this.isDarkMode = !this.isDarkMode;
    this.updateSwitchState();
  }

  private updateSwitchState(): void {
    // Actualizar el estado del interruptor basado en la variable isDarkMode
    const switchElement = this.el.nativeElement.querySelector('.switch') as HTMLInputElement;
    if (switchElement) {
      switchElement.checked = this.isDarkMode;
    }
  }
}
