import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as _ from "lodash";

@Injectable()
export class DbService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dbUrl = 'api';

    constructor(private http: Http) { }
    
    private getFromDatabase(url: string): Promise<any> {
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    
    private putToDatabase(url: string, entry: any): Promise<any> {
        return this.http.put(url, entry, { headers: this.headers })
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    
    getDictionary(): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/dictionary`);
    }
    
    getQuestions(): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/questions`);
    }
    
    getQuestion(questionId: number): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/questions/${questionId}`);
    }
    
    getCommments(): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/comments`);
    }
    
    getCommmentsOnTheQuestion(questionId: number): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/comments/?qId=${questionId}`);
    }
    
    private commmentVote(comment: any): Promise<any> {
        return this.putToDatabase(`${this.dbUrl}/comments/${comment.id}`, comment);
    }
    
    private questionVote(question: any): Promise<any> {
        return this.putToDatabase(`${this.dbUrl}/questions/${question.id}`, question);
    }
    
    private upVote(entry: any): any {
        entry.upvotes += 1;
        return entry;
    }
    
    private downVote(entry: any): any {
        entry.downvotes += 1;
        return entry;
    }
    
    commmentUpVote(comment: any): Promise<any> {
        return this.commmentVote(this.upVote(comment));
    }
    
    commentDownVote(comment: any): Promise<any> {
        return this.commmentVote(this.downVote(comment));
    }
    
    questionUpVote(question: any): Promise<any> {
        return this.questionVote(this.upVote(question));
    }
    
    questionDownVote(question: any): Promise<any> {
        return this.questionVote(this.downVote(question));
    }
    
    getUsers(): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/authors`);
    }
    
    getUser(userId: number): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/authors/${userId}`);
    }
    
    saveUser(user: any): Promise<any>  {
        return this.putToDatabase(`${this.dbUrl}/authors/${user.id}`, user);
    }
    
    getAvatar(avatarId: number): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/avatars/${avatarId}`);
    }
    
    getAvatars(): Promise<any>  {
        return this.getFromDatabase(`${this.dbUrl}/avatars`);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
