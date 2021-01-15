import { Component, OnInit, Input } from '@angular/core';
import { EpisodeDetail} from '../episode';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {
	  @Input() episodeDetail: EpisodeDetail;

  constructor() { }

  ngOnInit() {
  }

}
