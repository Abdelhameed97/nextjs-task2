import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('authToken')?.value

  if (!token) {
    redirect('/login')
  }

  try {
    jwt.verify(token, SECRET_KEY)
  } catch (err) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p>Welcome to your dashboard! This is a protected route.</p>
      </div>
    </div>
  )
}