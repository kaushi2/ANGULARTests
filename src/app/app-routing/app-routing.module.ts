import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

const routes: Routes = [
  {
    path: 'Parent',
    component: ParentComponent,
  },
  {
    path: 'Child',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }