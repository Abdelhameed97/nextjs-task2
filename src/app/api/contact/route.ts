import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()


  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  
  console.log('Contact form submission:', data)

  return NextResponse.json({ success: true })
}