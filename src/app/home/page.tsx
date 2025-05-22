export function generateMetadata() {
  return {
    title: 'Home | My Next.js App',
    description: 'Welcome to the home page of my Next.js application',
  }
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg">This is the home page of my Next.js application.</p>
    </div>
  )
}