import './blogItemDetails.scss'
import { ArrowLeft } from 'lucide-react';
import blogsData from '../../../../public/mock/blogs.json'
import Link from 'next/link';

interface BlogPageProps {
  params: { id: string };
}

export default function BlogItemDetails({params}: BlogPageProps) {
const blogId = Number(params.id);
  const blog = blogsData.find((p) => p.id === blogId);
    return (
        <section className="blogitemDetails">
            <div className="container">
                <Link href="/blog"><ArrowLeft /></Link>

                <p>
                    {blog?.content}
                </p>
            </div>
        </section>
    );
}
