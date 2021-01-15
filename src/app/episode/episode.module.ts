import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module';
import { EpisodePreviewComponent } from './episode-preview/episode-preview.component';
import { EpisodeSearchComponent } from './episode-search/episode-search.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';





@NgModule({
  declarations: [
	  EpisodePreviewComponent, 
	  EpisodeSearchComponent, 
	  EpisodeDetailComponent,
	],
  exports:[ 
	  EpisodePreviewComponent,
	  EpisodeSearchComponent,
  	],
  imports: [
	  HttpClientModule,
	  SharedModule,
  	],
})



export class EpisodeModule { }
