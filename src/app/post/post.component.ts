import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isSubmitting: boolean = false;
  post_id: any;
  comments: any;
  error: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
