import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundBeams />
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">Hum & Classify</h1>
        <ThemeToggle />
      </header>
      <main className="container mx-auto px-4 pt-20 pb-8">
        <h2 className="text-4xl font-extrabold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <footer className="text-center py-4 bg-background/80 backdrop-blur-sm">
        <p>&copy; 2024 Hum & Classify. All rights reserved.</p>
      </footer>
    </div>
  )
}

function BlogPostCard({ post }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
        <p>{post.excerpt}</p>
      </CardContent>
    </Card>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "Introduction to Song Classification",
    date: "2024-03-01",
    excerpt: "Learn about the basics of song classification using machine learning techniques.",
  },
  {
    id: 2,
    title: "The Power of Humming in Music Recognition",
    date: "2024-03-05",
    excerpt: "Discover how humming can be used as an input for song identification algorithms.",
  },
  {
    id: 3,
    title: "Machine Learning Models for Audio Processing",
    date: "2024-03-10",
    excerpt: "Explore different machine learning models suitable for audio processing tasks.",
  },
]