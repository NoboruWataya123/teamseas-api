
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCommentInput {
    text: string;
    authorId?: Nullable<number>;
    postId: number;
}

export class UpdateCommentInput {
    id?: Nullable<number>;
    text?: Nullable<string>;
}

export class CreatePostInput {
    title: string;
    content: string;
    authorId?: Nullable<number>;
}

export class UpdatePostInput {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Comment {
    id?: Nullable<number>;
    text?: Nullable<string>;
    authorId?: Nullable<number>;
    postId?: Nullable<number>;
}

export abstract class IQuery {
    abstract comments(): Comment[] | Promise<Comment[]>;

    abstract comment(id: number): Comment | Promise<Comment>;

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;

    abstract updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;

    abstract removeComment(id: number): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Post {
    id: number;
    title: string;
    content: string;
    authorId?: Nullable<number>;
    author?: Nullable<User>;
    comments?: Nullable<Nullable<Comment>[]>;
}

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    posts?: Nullable<Nullable<Post>[]>;
    comments?: Nullable<Nullable<Comment>[]>;
}

type Nullable<T> = T | null;
