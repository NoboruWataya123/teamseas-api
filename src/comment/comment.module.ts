import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService, CommentResolver, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
