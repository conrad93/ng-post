import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Posts } from '../models/posts.model';
import { Subject } from 'rxjs';
import { Comment } from '@angular/compiler';

const userHeader = new HttpHeaders({ 'Content-Type' : 'application/x-www-form-urlencoded' });

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient, public router:Router) { }

  userRegister(data){
    this.http.post('http://localhost/angular/ngPost_api/userRegister_api.php', JSON.stringify(data))
    .subscribe(
      res=>{
        if(res) {
          alert("Data inserted successfully");
          this.router.navigate(['user/userLogin']);
        }
        else {
          alert("User-name already exists!!!");
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

  sessionUserName: string;
  sessionUserNameChanged = new Subject<string>();
  userLogin(data){
    this.http.post('http://localhost/angular/ngPost_api/userLoginCheck_api.php',JSON.stringify(data)).subscribe(
      res=>{
        if(res['success'] == true){
          sessionStorage.setItem("sessionUserId", res['msg']['userId']);
          sessionStorage.setItem("sessionUserName", res['msg']['userName']);
          this.sessionUserName = sessionStorage.getItem("sessionUserName");
          this.sessionUserNameChanged.next(this.sessionUserName);
          alert('Welcome!!!')
          this.router.navigate(['user']);
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

  userLogout(){
    sessionStorage.clear();
    this.sessionUserName = null;
    this.sessionUserNameChanged.next(this.sessionUserName);
    alert("Signed-out!!!");
  }

  postData: Posts[] = [];
  getAllPost(){
    this.http.get<Posts[]>("http://localhost/angular/ngPost_api/getPost_api.php")
    .subscribe(
      res=>{
        this.postData=res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  postDetailsData: Posts;
  getPostDetails(postId){
    this.http.get<Posts>("http://localhost/angular/ngPost_api/getPostDetails_api.php", {params:{postId}})
    .subscribe(
      res=>{
        this.postDetailsData=res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  insertComment(data, postId){
    var insert_details = "postId=" + postId + "&userId=" + sessionStorage.getItem("sessionUserId") + "&comment=" + data['userComment'];
    this.http.post<Comment>('http://localhost/angular/ngPost_api/insertComment_api.php', insert_details, {headers:userHeader}).subscribe(  
      res=>{
        if (res) {
          alert("Comment added!!!");
          this.commentsData.push(res);
          this.postDetailsData.commentCount = +this.postDetailsData.commentCount + 1;
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

  commentsData: Comment[] = [];
  getAllComment(postId){
    this.http.get<Comment[]>("http://localhost/angular/ngPost_api/getComment_api.php", {params:{postId}})
    .subscribe(
      res=>{
        this.commentsData=res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  deleteSingleComment(commentId, index){
    this.http.get("http://localhost/angular/ngPost_api/deleteComment_api.php", {params:{commentId}})
    .subscribe(
      res=>{
        this.commentsData.splice(index, 1);
        this.postDetailsData.commentCount = this.postDetailsData.commentCount - 1;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  singleCommentData;
  getSingleComment(commentId){
    this.http.get("http://localhost/angular/ngPost_api/getSingleComment_api.php", {params:{commentId}})
    .subscribe(
      res=>{
        this.singleCommentData=res;
      },
      err=>{
        console.log(err);
      },
      ()=>{
        console.log("Complete");
      }
    )
  }

  editSingleComment(data, commentId, index){
    var insert_details = "commentId=" + commentId + "&editUserComment=" + data['editUserComment'];
    this.http.post<Comment>('http://localhost/angular/ngPost_api/editSingleComment_api.php', insert_details, {headers:userHeader}).subscribe(  
      res=>{
        if (res) {
          alert("Comment edited!!!");
          this.commentsData[index] = res
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

  accountData;
  getUserAccount(sessionUserId){
    this.http.get("http://localhost/angular/ngPost_api/getUserAccount_api.php", {params:{sessionUserId}})
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

  editUserAccount(data){
    var insert_details = "userId=" + sessionStorage.getItem("sessionUserId") + "&userName=" + data['userName'] + "&userEmail=" + data['userEmail'] + "&userPassword=" + data['userPassword'];
    this.http.post('http://localhost/angular/ngPost_api/editUserAccount_api.php', insert_details, {headers:userHeader}).subscribe(  
      res=>{
        if (res) {
          sessionStorage.setItem("sessionUserId", res['userId']);
          sessionStorage.setItem("sessionUserName", res['userName']);
          this.sessionUserName = sessionStorage.getItem("sessionUserName");
          this.sessionUserNameChanged.next(this.sessionUserName);
          alert("Account edited!!!");
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
