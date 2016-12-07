import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'homepage',
  templateUrl: 'app/components/homepage/homepage.html',
  styleUrls: ['app/styles/homepage.css']
})

export class HomepageComponent implements OnInit {
  posts: Post[];
  error: string;

  constructor (private postService: PostService) {}

  getPosts() {
    this.postService.getPosts().subscribe(
      posts => this.posts = posts,
      error => this.error = 'Cannot Get Posts'
    )
  }

  ngOnInit() {
    this.getPosts();
  }
}
