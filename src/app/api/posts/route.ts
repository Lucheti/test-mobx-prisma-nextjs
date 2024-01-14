import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
export async function GET() {
  // get all posts from prisma
  const posts = await prisma.post.findMany();
  return Response.json(posts)
}