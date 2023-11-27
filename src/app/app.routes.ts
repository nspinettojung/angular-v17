import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { UserComponent } from './page/user/user.component';

export const routes: Routes = [
    { path: '', title: 'App Home page',component: HomeComponent },
    { path: 'user', title: 'App User page', component: UserComponent},
];
