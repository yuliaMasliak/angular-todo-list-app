import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appPageDesign]'
})
export class PageDesignDirective {
  constructor(private ElementRef: ElementRef, private Renderer2: Renderer2) {
    this.Renderer2.setStyle(this.ElementRef.nativeElement, 'color', 'red')
  }
}
