import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  create(createCommentInput: Prisma.CommentCreateInput) {
    return this.prisma.comment.create({ data: createCommentInput });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findAllByUserId(id: Prisma.CommentFindManyArgs['where']['authorId']) {
    return this.prisma.comment.findMany({ where: { authorId: id } });
  }

  findAllByPostId(id: Prisma.CommentFindManyArgs['where']['postId']) {
    return this.prisma.comment.findMany({ where: { postId: id } });
  }

  findOne(commentUniqueInput: Prisma.CommentWhereUniqueInput) {
    return this.prisma.comment.findUnique({ where: commentUniqueInput });
  }

  update(commentUniqueInput: Prisma.CommentWhereUniqueInput, updateCommentInput: Prisma.CommentUpdateInput) {
    return this.prisma.comment.update({ where: commentUniqueInput, data: updateCommentInput });
  }

  remove(commentUniqueInput: Prisma.CommentWhereUniqueInput) {
    return this.prisma.comment.delete({ where: commentUniqueInput });
  }
}
