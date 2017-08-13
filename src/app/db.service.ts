import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import _ from "lodash"

@Injectable()
export class DbService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private dbUrl = 'api';

    constructor(private http: Http) { }
    
    // Get dictionary
    getDictionary(): Promise<any>  {
        return this.http.get(this.dbUrl + '/dictionary')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    
    // Get questions data
    getQData(qId?: number): Promise<any>  {
        let url: string; 
        
        if (_.isUndefined(qId)) {
            url = this.dbUrl + '/questions';
        }
        else {
            url = this.dbUrl + '/questions/' + qId;
        }
        
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    
    // Get comments data
    getComData(qId?: number): Promise<any>  {
        let url: string; 
        
        if (_.isUndefined(qId)) {
            url = this.dbUrl + '/comments';
        }
        else {
            url = this.dbUrl + '/comments/?qId=' + qId;
        }
        
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    // Simple error handler
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
