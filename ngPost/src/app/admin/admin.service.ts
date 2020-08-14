import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../models/users.model';
import { Subject } from 'rxjs';
import { UserService } from '../user/user.service';
import { Posts } from '../models/posts.model';

const adminHeader = new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded' });

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient, public router:Router, private userServ: UserService) { }

  register(data){
    this.http.post('http://localhost/angular/ngPost_api/register_api.php', JSON.stringify(data))
    .subscribe(
      res=>{
        if(res) {
          alert("Data inserted successfully");
          this.router.navigate(['adminLogin']);
        }
        else {
          alert("Admin-name already exists!!!");
        }
      },
      err=>{
        console.log(err);
        alert("Something went wrong, please try again");
      },
      ()=>{
        console.log('complete');
      }
    )
  }

  sessionAdminName: string;
  sessionAdminNameChanged = new Subject<string>();
  login(data){
    this.http.post('http://localhost/angular/ngPost_api/loginCheck_api.php',JSON.stringify(data)).subscribe(
      res=>{
        if(res['success'] == true){
          sessionStorage.setItem("sessionAdminId", res['msg']['adminId']);
          sessionStorage.setItem("sessionAdminName", res['msg']['adminName']);
          this.sessionAdminName = sessionStorage.getItem("sessionAdminName");
          this.sessionAdminNameChanged.next(this.sessionAdminName);
          alert('Welcome!!!');
          this.router.navigate(['admin']);
        } else {
          console.log('error login');
          alert("Username Password Incorrect");
        }  
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['adminLogin']);
  }

  upload(addPostForm, imgChg){
    const fd = new FormData();
    fd.append('fd', imgChg, imgChg.name);
    this.http.post('http://localhost/angular/ngPost_api/upload_api.php', fd).subscribe(
      res=>{
        if (res['success'] == true){
          this.insert(addPostForm, res['image']);
        }
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }
  insert(data, image){
    var insert_details = "adminId=" + sessionStorage.getItem("sessionAdminId") + "&title=" + data['title'] + "&description=" + data['description'] + "&image=" + image;
    this.http.post('http://localhost/angular/ngPost_api/insert_api.php', insert_details, {headers:adminHeader}).subscribe(  
      res=>{
        if (res['success'] == true) {
          alert("Post added!!!");
          console.log(res);
          console.log(insert_details);
        } else {
          alert("Something went wrong!!!");
        }
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }

  deletePost(postId, index){
    this.http.get("http://localhost/angular/ngPost_api/deletePost_api.php", {params:{postId}})
    .subscribe(
      res=>{
        this.userServ.postData.splice(index, 1);
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    );
  }

  usersData: Users[] = [];
  getAllUsers(){
    this.http.get<Users[]>("http://localhost/angular/ngPost_api/getUsers_api.php")
    .subscribe(
      res=>{
        this.usersData = res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    );
  }

  deleteUser(userId, index){
    this.http.get("http://localhost/angular/ngPost_api/deleteUser_api.php", {params:{userId}})
    .subscribe(
      res=>{
        this.usersData.splice(index, 1);
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    );
  }

  accountData;
  getAdminAccount(sessionAdminId){
    this.http.get("http://localhost/angular/ngPost_api/getAdminAccount_api.php", {params:{sessionAdminId}})
    .subscribe(
      res=>{
        this.accountData=res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    );
  }

  editAdminAccount(data){
    var insert_details = "adminId=" + sessionStorage.getItem("sessionAdminId") + "&adminName=" + data['adminName'] + "&adminEmail=" + data['adminEmail'] + "&adminPassword=" + data['adminPassword'];
    this.http.post('http://localhost/angular/ngPost_api/editAdminAccount_api.php', insert_details, {headers:adminHeader}).subscribe(  
      res=>{
        if (res) {
          alert("Account edited!!!");
          sessionStorage.setItem("sessionAdminId", res['adminId']);
          sessionStorage.setItem("sessionAdminName", res['adminName']);
          this.sessionAdminName = sessionStorage.getItem("sessionAdminName");
          this.sessionAdminNameChanged.next(this.sessionAdminName);
        } else {
          alert("Something went wrong!!!");
        }
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }

  singleUserData: Users;
  getSingleUser(userId) {
    this.http.get<Users>("http://localhost/angular/ngPost_api/getSingleUser_api.php", {params:{userId}})
    .subscribe(
      res=>{
        this.singleUserData = res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    );
  }

  editSingleUser(data, userId, index){
    var insert_details = "userId=" + userId + "&userName=" + data['userName'] + "&userEmail=" + data['userEmail'] + "&userPassword=" + data['userPassword'];
    this.http.post<Users>('http://localhost/angular/ngPost_api/editSingleUser_api.php', insert_details, {headers:adminHeader}).subscribe(  
      res=>{
        this.usersData[index] = res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }

  uploadNew(data, imgChg, postId, index){
    const fd = new FormData();
    fd.append('fd', imgChg, imgChg.name);
    this.http.post('http://localhost/angular/ngPost_api/upload_api.php', fd).subscribe(
      res=>{
        if (res['success'] == true){
          this.insertNew(data, res['image'], postId, index);
        }
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }
  insertNew(data, image, postId, index){
    var insert_details = "adminId=" + sessionStorage.getItem("sessionAdminId") + "&postId=" + postId + "&title=" + data['title'] + "&description=" + data['description'] + "&image=" + image;
    this.http.post<Posts>('http://localhost/angular/ngPost_api/editSinglePost_api.php', insert_details, {headers:adminHeader}).subscribe(  
      res=>{
        if (res) {
          alert("Post edited!!!");
          this.userServ.postData[index] = res;
        } else {
          alert("Something went wrong!!!");
        }
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log('complete');
      }
    );
  }

}
