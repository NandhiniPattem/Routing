import { Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({ selector: '[highlighter]' })
export class HighlightDirective {
    @HostBinding('style.backgroundColor') bgColor ='tomato';
    constructor( private elRef: ElementRef) {
        //this.elRef.nativeElement.style.backgroundColor ='yellow'
     }
     @HostListener('click') cEvent() {
         this.bgColor = 'black';
     }
}