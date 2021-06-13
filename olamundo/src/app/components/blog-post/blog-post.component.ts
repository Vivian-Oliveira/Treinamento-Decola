import { Component, Input, OnInit, Output } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  @Input()
  public post: BlogPostModel = new BlogPostModel();

  @Output()
  contadorAlterado: EventEmitter<number> = new EventEmitter<number>()

  contador: number = 1;

  incrementa() {
    this.contador++;
    this.emiteEvento(this.contador)
  }

  emiteEvento(evento: number) {
    this.contadorAlterado.emit(evento)
  }

  constructor() {}

  ngOnInit(): void {}

  compartilhar(): void {
    alert('Post ' + this.post?.titulo + ' compartilhado ' + this.contador + ' vezes!');
  }
}
