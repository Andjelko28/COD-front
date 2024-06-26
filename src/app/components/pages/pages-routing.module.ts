import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TskComponent } from './tsk/tsk.component';
import { MediaComponent } from './media/media.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'task-force', component: TskComponent
  },
  {
    path: 'media', component: MediaComponent
  },
  {
    path: 'support', component: SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
