import { Post, Prisma } from '.prisma/client';
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CommentService } from '../comment/comment.service';
import { User } from 'src/graphql';
import { UserService } from 'src/user/user.service';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly commentService: CommentService) {}

  @Mutation('createPost')
  create(@Args('createPostInput') createPostInput: Prisma.PostCreateInput) {  
    return this.postService.create(createPostInput);
  }

  @Query('posts')
  findAll() {
    return this.postService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postService.findOne({id});
  }

  @Mutation('updatePost')
  update(@Args('updatePostInput') postUniqueInput: Prisma.PostWhereUniqueInput, updatePostInput: Prisma.PostUpdateInput) {
    return this.postService.update(postUniqueInput, updatePostInput);
  }

  @Mutation('removePost')
  remove(@Args('id') id: number) {
    return this.postService.remove({id});
  }

  @ResolveField('author', () => User)
  async getAuthor(@Parent() post: Post) {
    const { id } = post;
 
    return this.userService.findOne({id});
  }

  @ResolveField('comments')
  async getComments(@Parent() post: Post) {
    return this.commentService.findAllByPostId(post.id);
  }
}
