import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export class ResizedEvent {
  constructor(
    readonly element: ElementRef,
    readonly newWidth: number,
    readonly newHeight: number,
    readonly oldWidth: number,
    readonly oldHeight: number
  ) { }
}

@Directive({
  selector: '[ktMonacoRisize]'
})
export class ResizedEventDirective implements OnInit, OnDestroy {

  @Output() constainerResized = new EventEmitter<ResizedEvent>();
  @Output() windowResized = new EventEmitter<any>();


  private oldWidth!: number;
  private oldHeight!: number;
  private resizeContainerEvent!: ResizeSensor;
  protected resizeWindowEvent!: Subscription;

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit(): void {
    this.resizeContainerEvent = new ResizeSensor(this.element.nativeElement, x => this.onContainerResized());
    this.onContainerResized();
    this.setWindowRisizeEvent();
  }

  private onContainerResized(): void {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return;
    }

    const event = new ResizedEvent(
      this.element,
      newWidth,
      newHeight,
      this.oldWidth,
      this.oldHeight);

    this.oldWidth = this.element.nativeElement.clientWidth;
    this.oldHeight = this.element.nativeElement.clientHeight;

    this.constainerResized.next(event);
  }


  private setWindowRisizeEvent(): void {
    this.resizeWindowEvent = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe((res) => {
        this.windowResized.emit();
      });
  }

  private cleanResize(): void {
    if (this.resizeWindowEvent) {
      this.resizeWindowEvent.unsubscribe();
    }
    if (this.resizeContainerEvent) {
      this.resizeContainerEvent.detach();
    }
  }

  ngOnDestroy(): void {
    this.cleanResize();
  }

}
