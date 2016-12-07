import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/posts';
import { CONFIG } from '../core/config';

@Injectable()
export class PostsService {
  private posturl = CONFIG.baseUrls.posts;

  constructor( private http : Http ) {}

  getPosts() : Observable<Post[]> {
    return this.http.get(this.posturl)
      .map(this.extractData)
  }

  private extractData (res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return (body && body.data || {});
  }

}
