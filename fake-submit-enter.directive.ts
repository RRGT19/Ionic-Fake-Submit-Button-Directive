import {Directive, ElementRef, OnInit} from '@angular/core';
import {DomController} from "@ionic/angular";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector:
    'form,' +
    '[formGroup],' +
    '[ngSubmit],' +
    '[fakeSubmitEnter]'
})
export class FakeSubmitEnterDirective implements OnInit {

  /**
   * The element that we will modify.
   */
  private nativeElement: HTMLElement;

  /**
   * - DomController will allow us to make our modifications to the DOM at the
   *   ideal time for better performance.
   * - ElementRef enables access the node element directly.
   */
  constructor(
    private domCtrl: DomController,
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.initNativeElement();
    this.applyFake();
  }

  initNativeElement() {
    this.domCtrl.read(() => this.nativeElement = this.el.nativeElement);
  }

  applyFake() {
    const fakeButton = document.createElement('input');
    fakeButton.type = 'submit';
    fakeButton.style.position = 'absolute';
    fakeButton.style.visibility = 'hidden';
    fakeButton.style.left = '-1000px';
    this.domCtrl.write(() => this.nativeElement.appendChild(fakeButton));
  }

}
