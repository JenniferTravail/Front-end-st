export class Episode {

	title?:string;
	uid?:string;
	episodeNumber?:number;
	title_season?:string;
	title_series?:string;

	constructor( args: Episode= {} ){
		this.uid = args.uid;
		this.title = args.title;
		this.episodeNumber = args.episodeNumber;
		this.title_season = args.title_season;
		this.title_series = args.title_series;

	}

}


export class EpisodeDetail{
	title?:string;
	uid?:string;

	title_series_detail?:string;

	episodeNumberDetail?:number;
	
	seasonNumber?:number;
	//numberCharEp?:number;


	constructor( args: EpisodeDetail= {} ){
		this.uid = args.uid;
		this.title = args.title;
		this.episodeNumberDetail = args.episodeNumberDetail;
		this.title_series_detail = args.title_series_detail;
		this.seasonNumber = args.seasonNumber;
		//this.numberCharEp = args.numberCharEp;

	}
}

