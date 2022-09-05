import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el : ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl : HTMLElement = el.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `CopyRight # ${currentYear} All Rights Reserved.`;
   }

}
