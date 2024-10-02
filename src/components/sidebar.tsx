import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Machine Learning</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Audio Processing</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Project Updates</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Tutorials</a></li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Getting Started with Hum & Classify</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">5 Tips for Better Humming Recognition</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">The Future of Audio AI</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;