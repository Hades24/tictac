import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TossComponent } from './toss/toss.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  {path: 'game/:mode/:player', component: BoardComponent},
  {path: 'toss/:mode', component: TossComponent},
  {path: 'home', component: SelectComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
