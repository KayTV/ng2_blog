import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Comment } from '../models/comment';
import { CONFIG } from '../core/config';

@Injectable()
export class CommentService {
  private commentUrl = CONFIG.baseUrls.comments;

  constructor( private http: Http ) {}

  getComments(): Observable<Comment[]> {
    return this.http.get(this.commentUrl)
      .map(this.extractData)
  }

  private extractData (res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    console.log(body)
    return (body && body.data || {});
  }

}
