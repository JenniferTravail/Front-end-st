import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IListReponse, IListReponseDetail } from '../../lib/list-reponse';
import { Episode , EpisodeDetail } from './episode';
import { IEpisode, IEpisodeRep , IEpisodeDetail, IEpisodeRepDetail} from './episode-list-response';

@Injectable({
	providedIn:'root'
})

export class EpisodeRepository {

	private _episodeUrl = 'http://stapi.co/api/v1/rest/episode/search';

	private _episodeUrlDetail = 'http://stapi.co/api/v1/rest/episode?uid=EPMA0000001362';
	

	
	constructor( private _httpClient : HttpClient) {}


	getEpisodeList(): Observable<Episode[]>{
		return this.getEpisodeListWithMeta()
		.pipe(map(EpisodeListReponse => EpisodeListReponse.itemList));
	}

	getEpisodeListWithMeta(): Observable<IListReponse<Episode>>{

		return this._httpClient.get<IEpisodeRep>
		(this._episodeUrl)
		.pipe(map((iEpisodeRep: IEpisodeRep) => {
				const itemList = iEpisodeRep.episodes.map(ep => 
					this._EpisodeInfo(ep)
				);

				return {	
					itemList
				};
			})
		);

	}

	// Pour le deuxième appel

	

	getEpisodeListDetail(): Observable<EpisodeDetail[]>{
		return this.getEpisodeListWithMetaDetail()
		.pipe(map(EpisodeListReponseDetail => EpisodeListReponseDetail.itemListDetail));
	}

	getEpisodeListWithMetaDetail(): Observable<IListReponseDetail<EpisodeDetail>>{

		return this._httpClient.get<IEpisodeRepDetail>
		(this._episodeUrlDetail)
		.pipe(map((iEpisodeRepDetail: IEpisodeRepDetail) => {
				const itemListDetail = iEpisodeRepDetail.episodes.map(epDetail => 
					this._EpisodeInfoDetail(epDetail)

				);

				return {	
					itemListDetail
				};
			})
		);

	}




	private _EpisodeInfo(ep : IEpisode){

		const { series, uid, episodeNumber, season, title } = ep;
		
		let title_season ;

		let title_series ;

		title_series = series.title;
		title_season = season.title;


		return new Episode({
			uid,
			title,
			episodeNumber,
			title_series,
			title_season,
		});
	}


	private _EpisodeInfoDetail(epDetail : IEpisodeDetail){
		const{ uid, title, series , seasonNumber,episodeNumber} = epDetail;



		let title_series_detail ;
		let numberCharEp;
		let episodeNumberDetail;
		episodeNumberDetail = episodeNumber;
		title_series_detail = series.title;

		//numberCharEp = characters.

		
	

		return new EpisodeDetail({
			uid,
			title_series_detail,
			title,
			seasonNumber,
			episodeNumberDetail,
			
		});
	}







}