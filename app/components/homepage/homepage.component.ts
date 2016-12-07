import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/posts';

@Component({
  selector: 'homepage',
  templateUrl: 'app/components/homepage/homepage.html',
  styleUrls: ['app/styles/homepage.css']
})

export class HomepageComponent {
  posts: Post[];
  error: string;

  constructor (private postService: PostsService) {}

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
