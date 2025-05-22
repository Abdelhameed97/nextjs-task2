export function generateMetadata() {
  return {
    title: 'About | My Next.js App',
    description: 'Learn more about me and this application',
  }
}

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">Here's some information about me and this project.</p>
      <div className="prose">
        <p>I'm a developer passionate about building web applications with Next.js.</p>
        <p>This project demonstrates static page generation with metadata.</p>
      </div>
    </div>
  )
}