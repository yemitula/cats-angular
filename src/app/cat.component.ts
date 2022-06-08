import { Component, Input } from '@angular/core';

@Component({
  selector: 'cat',
  template: `<img [src]="cat?.url" />`,
})
export class CatComponent {
  @Input() cat: any;
}
