import { Directive, Input, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;
  // @Output() onScale: EventEmitter<any> = new EventEmitter<any>();

  initialTop: number = 0

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    // this.onScale.emit(this.eleRef.nativeElement.style.top);
  }

}
