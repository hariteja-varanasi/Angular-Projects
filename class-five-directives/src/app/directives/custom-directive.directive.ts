import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngCustom]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private el: ElementRef) {
    console.log('Custom Directive Constructor');
    console.log(this.el);

    /*this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.backgroundColor = 'goldenrod';*/
  }

  ngOnInit() {
    /* this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.backgroundColor = 'tan'; */    

    this.el.nativeElement.style.color = this.foreColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

  @Input() public foreColor: any;
  @Input() public bgColor: any;

  @HostListener('mouseenter') onMouseEnterMethod(){
    this.el.nativeElement.style.color = this.foreColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseleave') onMouseLeaveMethod(){
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
  }

}
