import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  exports: SharedModule.MODULE_LIST,
  imports: SharedModule.MODULE_LIST
  
})


export class SharedModule {
	static readonly MODULE_LIST = [CommonModule]; 
}
