import { OnInit, OnChanges, Directive, Input,  HostBinding, Renderer2, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnInit, OnChanges {
  @HostBinding('style.position')
  hostPosition:string = 'relative';

  @Input() appLoading: boolean = false;
  @Input() aa: string ;

  constructor(
    private targetEl: ElementRef, private renderer: Renderer2
    ) {
  }

  ngOnInit() {

    // if(this.aa == undefined){
    //   return false;
    // }
    console.log(this.appLoading)
      const loadingContainer  = this.renderer.createElement('div');
      this.renderer.setStyle(loadingContainer, 'display', this.appLoading[0] ? 'flex' : 'none');
      this.renderer.setStyle(loadingContainer, 'justify-content', 'center');
      this.renderer.setStyle(loadingContainer, 'align-items', 'center');
      this.renderer.addClass(loadingContainer, 'loading-container');
      this.renderer.setStyle(loadingContainer, 'position', 'absolute');
      this.renderer.setStyle(loadingContainer, 'top', '0');
      this.renderer.setStyle(loadingContainer, 'background', '#e4e4e4');
      this.renderer.setStyle(loadingContainer, 'width', '100%');
      this.renderer.setStyle(loadingContainer, 'height', '100%');

      // custom spinner -- start
      const spinnerContainer  = this.renderer.createElement('div');
      this.renderer.addClass(spinnerContainer, 'lds-facebook');
      const spinnerInnerDiv1  = this.renderer.createElement('div');
      const spinnerInnerDiv2  = this.renderer.createElement('div');
      const spinnerInnerDiv3  = this.renderer.createElement('div');
      this.renderer.addClass(spinnerInnerDiv1, 'h-100');
      this.renderer.setStyle(spinnerContainer, 'height', '25% !important');
      if(this.appLoading[1] == 'lg'){
        this.renderer.addClass(spinnerInnerDiv1, 'h-100');
      }else if(this.appLoading[1] == 'md'){
        this.renderer.addClass(spinnerInnerDiv1, 'h-50');
      }else if(this.appLoading[1] == 'sm'){
        this.renderer.addClass(spinnerInnerDiv1, 'h-25');
      }
      

      this.renderer.appendChild(spinnerContainer, spinnerInnerDiv1);
      this.renderer.appendChild(spinnerContainer, spinnerInnerDiv2);
      this.renderer.appendChild(spinnerContainer, spinnerInnerDiv3);

      this.renderer.appendChild(loadingContainer, spinnerContainer);
      // custom spinner -- end

      this.renderer.appendChild(this.targetEl.nativeElement, loadingContainer);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.appLoading[0]) {
      const container = this.targetEl.nativeElement;
      const div = container.querySelector('.loading-container');
      if (div) {
        this.renderer.setStyle(div, 'display', this.appLoading[0] ? 'flex' : 'none'); 
      }
    }
  }
  
}