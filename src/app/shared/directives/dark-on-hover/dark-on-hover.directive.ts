import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[apDarkOnHover]'
})
export class DarkOnHoverDirective {

    @Input() brightness: string = '70%';

    constructor(
        private el: ElementRef,
        private render: Renderer2
        ) {}

    @HostListener('mouseover')
    darkOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkOff() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}