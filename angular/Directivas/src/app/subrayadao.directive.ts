import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayadao]',
})
export class SubrayadaoDirective {
  constructor(elem: ElementRef) {
    console.log(elem.nativeElement);
    elem.nativeElement.style.textDecoration = 'underline';
  }
}
