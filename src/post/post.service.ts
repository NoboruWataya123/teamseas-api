import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  create(createPostInput: Prisma.PostCreateInput) {
    return this.prisma.post.create({ data: createPostInput });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findMany(id: Prisma.PostFindManyArgs['where']['authorId']) {
    return this.prisma.post.findMany({ where: { authorId: id }});
  }

  findOne(postUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({ where: postUniqueInput });
  }

  update(postUniqueInput: Prisma.PostWhereUniqueInput, updatePostInput: Prisma.PostUpdateInput) {
    return this.prisma.post.update({ where: postUniqueInput, data: updatePostInput });
  }

  remove(postUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.delete({ where: postUniqueInput });
  }
}
