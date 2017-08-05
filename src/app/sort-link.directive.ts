import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appSortLink]'
})
export class SortLinkDirective implements OnInit {
    isClicked: boolean = false;
    
    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.el.nativeElement.style.textDecoration = 'underline';
        this.el.nativeElement.style.color = 'blue';
        this.el.nativeElement.style.fontWeight = 'bold';
    }
    
    @HostListener('click') onClick() {
        this.click();
    }
    
    private click() {
        this.isClicked = !this.isClicked;
        this.el.nativeElement.style.textDecoration = 'none';
        this.el.nativeElement.style.color = 'gray';
        this.el.nativeElement.style.fontWeight = 'bold';
    }
}
