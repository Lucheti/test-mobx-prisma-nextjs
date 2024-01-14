import { redirect } from 'next/navigation'
import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(
  req: Request,
  res: NextApiResponse
) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.create({
      data: {
        email,
        password
      }
    })

    return Response.json(user)
  } catch (error: any) {
    console.log(error)
    return new Response('invalid credentials', { status: 404 });
  }
}
