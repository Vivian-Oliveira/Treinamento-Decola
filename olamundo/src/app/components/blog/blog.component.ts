import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public blogPosts: Array<BlogPostModel>;
  public criarPost = new BlogPostModel()

  constructor() {
    this.blogPosts = [];

    const post = new BlogPostModel();

    post.titulo = 'Primeira Postagem!';
    post.imagem =
      'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png';
    post.texto =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ';
    this.blogPosts.push(post);

    const post2 = new BlogPostModel();

    post2.titulo = 'Segunda Postagem';
    post2.imagem =
      'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png';
    post2.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';

    this.blogPosts.push(post2);

    const post3 = new BlogPostModel();

    post3.titulo = 'Terceira Postagem';
    post3.imagem = 'https://blog.hotmart.com/blog/2017/09/criar-um-blog.png';
    post3.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';

    this.blogPosts.push(post3);




  }

  ngOnInit(): void {}

  addPost() : void {

    this.blogPosts.push(this.criarPost)
    this.criarPost = new BlogPostModel();
  }

}
