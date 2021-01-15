export interface IEpisode {
	
	uid:string;
	title:string;
	series:{
		title:string;
	};
	season:{
		title:string;
	};
	episodeNumber:number;
}



export interface IEpisodeDetail{
	uid:string;
	title:string;
	series:{
		title:string;
	};
	seasonNumber:number;
	episodeNumber:number;
	
	//characters;

}


export interface IEpisodeRep{
	episodes: IEpisode[];
}

export interface IEpisodeRepDetail{
	episodes: IEpisodeDetail[];
}