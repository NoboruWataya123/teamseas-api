import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { PostService } from 'src/post/post.service';
import { CommentService } from '../comment/comment.service';

@Module({
  providers: [PrismaService, UserResolver, UserService, PostService, CommentService],
  exports: [UserService],
})
export class UserModule {}
