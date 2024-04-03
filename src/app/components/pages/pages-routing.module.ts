import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TskComponent } from './tsk/tsk.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'task-force', component: TskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
