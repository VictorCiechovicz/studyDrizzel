import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { User, NewUser, users } from '../../../schemas/user'


export async function GET(request: NextRequest) {
  const allUsers: User[] = await db.select().from(users)

  return NextResponse.json({ users: allUsers });
}

export async function POST(request: NextRequest) {
  const newUser: NewUser = await request.json()
  const createUser = await db.insert(users).values(newUser).returning(
    {
      id: users.id,
      name: users.name,
      email: users.email,
      createdAt: users.createdAt
    }
  )
  return NextResponse.json({ users: createUser });
}

export async function PUT(request: NextRequest) {
  return NextResponse.json({});
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({});
}