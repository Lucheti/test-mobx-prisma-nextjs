import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export async function POST(
  req: Request,
  res: NextApiResponse
) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findFirst({
      where: {
        email,
        password
      }
    })
    console.log("POST", user)
    return Response.json(user)
  } catch (error: any) {
    console.log(error)
    return new Response('invalid credentials', { status: 404 });
  }
}