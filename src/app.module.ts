import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

@Module({
  imports: [PostModule, UserModule, AuthenticationModule, GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    playground: false,
    plugins: [ ApolloServerPluginLandingPageLocalDefault() ],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
