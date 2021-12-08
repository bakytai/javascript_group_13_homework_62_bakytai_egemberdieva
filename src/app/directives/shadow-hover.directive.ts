import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadowHover]'
})

export class ShadowHoverDirective {
  @Input() set  appShadowHover(shadowClass: string) {
    if (shadowClass) {
      this.shadowClass = shadowClass;
    }
  };

  shadowClass = 'shadow';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') addClass() {
    this.renderer.addClass(this.el.nativeElement, this.shadowClass);
  }

  @HostListener('mouseleave') removeClass() {
    this.renderer.removeClass(this.el.nativeElement, this.shadowClass);
  }
}
