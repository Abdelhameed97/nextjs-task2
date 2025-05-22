import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import bcrypt from 'bcryptjs'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'
const USERNAME = process.env.ADMIN_USERNAME || 'admin'
const PASSWORD = process.env.ADMIN_PASSWORD || 'password'

export async function POST(request: Request) {
  const { username, password } = await request.json()


  const isPasswordValid = username === USERNAME && await bcrypt.compare(password, await bcrypt.hash(PASSWORD, 10))

  if (!isPasswordValid) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  }

  const token = jwt.sign(
    { username },
    SECRET_KEY,
    { expiresIn: '1h' }
  )

  const serialized = serialize('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600, 
    path: '/',
  })

  const response = NextResponse.json(
    { message: 'Authenticated successfully' },
    { status: 200 }
  )

  response.headers.set('Set-Cookie', serialized)

  return response
}