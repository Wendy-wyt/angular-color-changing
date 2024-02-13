import { Component, EventEmitter, Input, Output } from '@angular/core';
import { newsItem } from '../interfaces/newsItem.interface';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
})
export class NewsBoxComponent {
  @Input() newsItem: newsItem | undefined;
  @Input() activated: boolean;
  @Output() activatedNow = new EventEmitter<newsItem>();

  constructor() {}

  onClick() {
    this.activatedNow.emit(this.newsItem);
  }
}
