import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});
    await prisma.comment.deleteMany({});
    await prisma.user.create({
        data: {
            email: "test@test.com",
            password: "test",
            name: "test",
            posts: {
                create: {
                    title: "test",
                    content: "test",
                    comments: {
                        create: {
                            text: "test",
                            authorId: 1
                        }
                    }
                }
            }
        }
    });

    await prisma.user.create({
        data: {
            email: "test2@test.com",
            password: "test",
            name: "test",
            posts: {
                create: {
                    title: "test",
                    content: "test",
                    comments: {
                        create: {
                            text: "test",
                            authorId: 1
                        }
                    }
                }
            }
        }
    });

    await prisma.post.create({
        data: {
            title: "test",
            content: "test",
            authorId: 1,
        }
    });

    await prisma.comment.create({
        data: {
            text: "test",
            authorId: 1,
            postId: 1
        }
    });
}

main().catch(e => console.error(e)).finally(async () => {
    await prisma.$disconnect()});