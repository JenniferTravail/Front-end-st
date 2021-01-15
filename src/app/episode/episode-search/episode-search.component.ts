import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Episode , EpisodeDetail} from '../episode';
import { EpisodeRepository } from '../episode-repository';

@Component({
  selector: 'app-episode-search',
  templateUrl: './episode-search.component.html',
  styleUrls: ['./episode-search.component.scss']
})


export class EpisodeSearchComponent implements OnDestroy, OnInit {

	episodeList : Episode[];
  episodeListDetail: EpisodeDetail[];


	private _isDead$ = new Subject();
  private _isDead2$ = new Subject();

  constructor(private _episodeRepository : EpisodeRepository) { }

  ngOnInit() {

  	this._episodeRepository
  	.getEpisodeList()
  	.pipe(takeUntil(this._isDead$))
  	.subscribe(episodeList => this.episodeList = episodeList);

    this._episodeRepository
    .getEpisodeListDetail()
    .pipe(takeUntil(this._isDead2$))
    .subscribe(episodeListDetail => this.episodeListDetail = episodeListDetail);


   }

  ngOnDestroy(){
  	this._isDead$.next();
    this._isDead2$.next();

  }

}
