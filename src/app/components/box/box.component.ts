import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { FeedItem } from "../../models/feedItem";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() feedItem: FeedItem = new FeedItem(); 

  constructor(private toastr: ToastsManager, private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {  }

  private rateUser(nota){
    this.feedItem.showRate = false;
    //ToDo: realizar chamada no back-end para salvar a avaliação.
    this.toastr.success('Avaliação realizada.', 'Sucesso!');
  }
}
