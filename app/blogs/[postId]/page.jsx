import React from 'react';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js and how to build modern web applications with React.",
    author: "John Doe",
    category: "Next.js",
    date: "2026-09-20",
    image: "/images/nextjs.jpg",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "A beginner-friendly guide to understanding reusable components in React.",
    author: "Jane Smith",
    category: "React",
    date: "2026-09-18",
    image: "/images/react.jpg",
  },
  {
    id: 3,
    title: "Why TypeScript Matters",
    description:
      "Discover how TypeScript can make your JavaScript projects safer and easier to maintain.",
    author: "Alex Johnson",
    category: "TypeScript",
    date: "2026-09-15",
    image: "/images/typescript.jpg",
  },
  {
    id: 4,
    title: "Building Responsive Websites",
    description:
      "Learn practical techniques for creating websites that look great on every screen size.",
    author: "Sarah Wilson",
    category: "Web Development",
    date: "2026-09-12",
    image: "/images/responsive.jpg",
  },
  {
    id: 5,
    title: "Introduction to Tailwind CSS",
    description:
      "Explore how Tailwind CSS helps you quickly build beautiful and responsive user interfaces.",
    author: "Michael Brown",
    category: "CSS",
    date: "2026-09-10",
    image: "/images/tailwind.jpg",
  },
];

const PostDetails = async({params}) => {

    const {postId} = await params;
    const post = blogsData.find(post => post.id === parseInt(postId));

    return (
        <div>
            <h2>Post page details: {postId} </h2>
            {
                post && (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p><strong>Author:</strong> {post.author}</p>
                        <p><strong>Category:</strong> {post.category}</p>
                        <p><strong>Date:</strong> {post.date}</p>
                    </div>
                )
            }
        </div>
    );
};

export default PostDetails;