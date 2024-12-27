import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
];
