import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma, User } from '.prisma/client';
import { PostService } from '.././post/post.service';
import { CommentService } from '../comment/comment.service';

@Resolver('User')
export class UserResolver {
  constructor (
    private readonly userService: UserService,
    private readonly postService: PostService,
    private readonly commentService: CommentService
  ) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne({id});
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') userUniqueInput: Prisma.UserWhereUniqueInput, updateUserInput: Prisma.UserUpdateInput) {
    return this.userService.update(userUniqueInput, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove({id});
  }

  @ResolveField('posts')  // findMany
  findPosts(@Parent() user: User) {
    return this.postService.findMany(user.id);
  }

  @ResolveField('comments')  // findMany
  findComments(@Parent() user: User) {
    return this.commentService.findAllByUserId(user.id);
  }
}
