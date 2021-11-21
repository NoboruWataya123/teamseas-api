import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CommentService } from '../comment/comment.service';

@Module({
  providers: [PrismaService, PostResolver, PostService, UserService, CommentService],
  exports: [PostService],
})
export class PostModule {}
