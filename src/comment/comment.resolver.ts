import { Comment, Prisma } from '.prisma/client';
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CommentService } from './comment.service';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation('createComment')
  create(@Args('createCommentInput') createCommentInput: Prisma.CommentCreateInput) {
    return this.commentService.create(createCommentInput);
  }

  @Query('comments')
  findAll() {
    return this.commentService.findAll();
  }

  @Query('comment')
  findOne(@Args('id') commentUniqueInput: Prisma.CommentWhereUniqueInput) {
    return this.commentService.findOne(commentUniqueInput);
  }

  @Mutation('updateComment')
  update(@Args('updateCommentInput') commentUniqueInput: Prisma.CommentWhereUniqueInput, updateCommentInput: Prisma.CommentUpdateInput) {
    return this.commentService.update(commentUniqueInput, updateCommentInput);
  }

  @Mutation('removeComment')
  remove(@Args('id') id: number) {
    return this.commentService.remove({ id });
  }
}
