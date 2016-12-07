import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/post';
import { CONFIG } from '../core/config';

@Injectable()
export class PostService {
  private posturl = CONFIG.baseUrls.posts;

  constructor( private http: Http ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get(this.posturl)
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
