import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appOnhover]'
})
export class OnhoverDirective {
  constructor(private ElementRef: ElementRef, private Renderer2: Renderer2) {}

  @HostListener('mouseenter', ['$event'])
  public onMouseEnter(event: MouseEvent) {
    this.highlight('red')
  }
  @HostListener('mouseleave', ['$event'])
  public onMouseLeave(event: MouseEvent) {
    this.highlight('white')
  }
  private highlight(color: string) {
    this.Renderer2.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      color
    )
  }
}
