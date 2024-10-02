import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogPost = ({ title, excerpt, date }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{excerpt}</p>
        <Button variant="outline">Read More</Button>
      </CardContent>
    </Card>
  );
};

export default BlogPost;