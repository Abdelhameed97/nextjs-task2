import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map(filename => ({
    slug: filename.replace(/\.md$/, '')
  }))
}

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image,
    }
  })

  return posts
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.date}</p>
              <p className="mt-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}