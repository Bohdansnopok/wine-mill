import './blogItemDetails.scss'
import { ArrowLeft } from 'lucide-react';
import blogsData from '../../../../public/mock/blogs.json'

interface BlogPageProps {
  params: { id: string };
}

export default function BlogItemDetails({params}: BlogPageProps) {
const blogId = Number(params.id);
  const blog = blogsData.find((p) => p.id === blogId);
    return (
        <section className="blogitemDetails">
            <div className="container">
                <a href=""><ArrowLeft /></a>

                <p>
                    {blog?.content}
                </p>
            </div>
        </section>
    );
}
