import { Component, OnInit } from '@angular/core';
import { FeedItem } from "../../models/feedItem";
import { FeedService } from '../../services/feed.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})

export class FeedComponent implements OnInit {
  feedItems: FeedItem[];

  constructor(private feedService: FeedService, private toastr: ToastsManager) { }

  ngOnInit() {
    this.getFeed();
  }

  private getFeed() {
    this.feedService.getBrand()
      .subscribe(data => this.feedItems = data,
      error => this.showErrorMessage(error));
  }

  private showErrorMessage(error: any) {
    this.toastr.error('Ocorreu um erro.', 'Oops!');
  }
}
