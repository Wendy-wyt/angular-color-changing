import { newsItem } from './newsItem.interface';

export interface newsboard {
  newsItems: newsItem[];
  activatedItem: newsItem | undefined;
}
