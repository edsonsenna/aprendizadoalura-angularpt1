import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';

@Directive({
    selector: '[immediate-click]'
})
export class ImmeadiateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetector: PlatformDetectorService) {     
    }

    ngOnInit() {
        this.platformDetector.isPlatformBrowser &&
                this.element.nativeElement.click();
    }
}