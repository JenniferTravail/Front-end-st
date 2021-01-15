import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';



@Component({
  selector: 'app-episode-preview',
  templateUrl: './episode-preview.component.html',
  styleUrls: ['./episode-preview.component.scss']
})

export class EpisodePreviewComponent implements OnInit {

  @Input() episode: Episode;
	
  constructor() { }
  ngOnInit(){ }
}
