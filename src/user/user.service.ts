import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: createUserInput });
  }

  findAll(){
    return this.prisma.user.findMany();
  }

  findOne(userUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where: userUniqueInput });
  }

  update(userUniqueInput: Prisma.UserWhereUniqueInput, updateUserInput: Prisma.UserUpdateInput) {
    return this.prisma.user.update({ where: userUniqueInput, data: updateUserInput });
  }

  remove(userUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where: userUniqueInput });
  }
}
