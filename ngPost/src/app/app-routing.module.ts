import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareModule } from './share/share.module';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ViewPostComponent } from './admin/view-post/view-post.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { PostComponent } from './user/post/post.component';
import { PostDetailsComponent } from './user/post/post-details/post-details.component';
import { UserCommentsComponent } from './user/post/post-details/user-comments/user-comments.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserAccountComponent } from './user/user-account/user-account.component';
import { AdminAccountComponent } from './admin/admin-account/admin-account.component';
import { HomeComponent } from './user/home/home.component';
import { AdminLoginGuard } from './admin/admin-login.guard';
import { UserLoginGuard } from './user/user-login.guard';

const routes: Routes = [
  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'adminRegister', component: AdminRegisterComponent},
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'admin', component: AdminComponent, canActivate:[AdminLoginGuard], children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent},
    {path:'users', component: UsersComponent},
    {path:'viewPost', component: ViewPostComponent},
    {path:'addPost', component: AddPostComponent},
    {path:'adminAccount', component: AdminAccountComponent},
    {path:'**', component: PageNotFoundComponent}
  ]},
  {path:'user', component: UserComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'post', component: PostComponent},
    {path:'post/:postId', component: PostDetailsComponent},
    {path:'userLogin', component: UserLoginComponent},
    {path:'userRegister', component: UserRegisterComponent},
    {path:'userAccount', component: UserAccountComponent, canActivate:[UserLoginGuard]},
    {path:'**', component: PageNotFoundComponent}
  ]},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    PostComponent,
    PostDetailsComponent,
    UserCommentsComponent,
    ViewPostComponent,
    AddPostComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    AdminAccountComponent,
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserAccountComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    ShareModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
