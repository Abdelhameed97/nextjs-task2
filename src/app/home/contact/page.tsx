export function generateMetadata() {
  return {
    title: 'Contact | My Next.js App',
    description: 'Get in touch with me through this contact form',
  }
}

export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border rounded"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border rounded"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea 
            id="message" 
            rows={4}
            className="w-full px-4 py-2 border rounded"
            placeholder="Your message"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}