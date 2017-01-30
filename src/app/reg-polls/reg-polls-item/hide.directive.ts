import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})

export class HideDirective {

	constructor(private el: ElementRef) { }

	@HostBinding('class.hide') hidding: boolean = true;

	@HostListener('click', ['$event.target']) onClick(btn) {
		this.hidding = !this.hidding;
		if(this.hidding) {
			this.el.nativeElement.parentElement.parentElement.children[2].style.display = 'none';
			this.el.nativeElement.children[0].children[0].innerHTML = 'visibility';
		} else {
			this.el.nativeElement.parentElement.parentElement.children[2].style.display = 'block';
			this.el.nativeElement.children[0].children[0].innerHTML = 'visibility_off';
		}
		
	}

}
