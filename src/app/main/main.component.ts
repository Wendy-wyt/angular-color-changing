import { Component, OnInit, VERSION } from '@angular/core';
import { newsboard } from '../interfaces/newsboard.interface';
import { newsItem } from '../interfaces/newsItem.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  private newsItem1: newsItem = {
    color: 'blue',
    title: 'blue title',
    author: 'Lorem ipsum dolor sit amet',
    content:
      'consectetur adipisicing elit. Ducimus accusamus expedita nam doloremque animi aut dolores quaerat. Quae tenetur voluptatum harum, delectus minus sint excepturi sequi, beatae fugiat praesentium necessitatibus?',
  };

  private newsItem2: newsItem = {
    color: 'red',
    title: 'red title',
    author: 'Lorem ipsum dolor sit amet',
    content:
      'consectetur adipisicing elit. Ducimus accusamus expedita nam doloremque animi aut dolores quaerat. Quae tenetur voluptatum harum, delectus minus sint excepturi sequi, beatae fugiat praesentium necessitatibus?',
  };

  private newsItem3: newsItem = {
    color: 'black',
    title: 'black title',
    author: 'Lorem ipsum dolor sit amet',
    content:
      'consectetur adipisicing elit. Ducimus accusamus expedita nam doloremque animi aut dolores quaerat. Quae tenetur voluptatum harum, delectus minus sint excepturi sequi, beatae fugiat praesentium necessitatibus?',
  };

  private newsItem4: newsItem = {
    color: 'green',
    title: 'green title',
    author: 'Lorem ipsum dolor sit amet',
    content:
      'consectetur adipisicing elit. Ducimus accusamus expedita nam doloremque animi aut dolores quaerat. Quae tenetur voluptatum harum, delectus minus sint excepturi sequi, beatae fugiat praesentium necessitatibus?',
  };

  newsItems: newsboard = {
    newsItems: [this.newsItem1, this.newsItem2, this.newsItem3, this.newsItem4],
    activatedItem: this.newsItem1,
  };

  constructor() {
    console.log('MainComponent:Contructed');
  }

  updateActivatedItem(newsItem: newsItem) {
    this.newsItems.activatedItem = newsItem;
  }
}
