import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { STEMButton } from "../Buttons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/utils/types";



export const ResearchContent = () => {
    const category = "1417";
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const res = await fetch(`/api/wp-posts?categoryId=${category}`);
            const data: Post[] = await res.json();

            setPosts(data.slice(0, 6)); // Limit to 6 posts for preview
            setLoading(false);
        }

        fetchPosts();
    }, [category]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full flex flex-col gap-8">
            <ul className={`grid ${posts.length >= 3 ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"} gap-4`}>
                {posts.length > 0 ? (
                    posts.map((post: Post, i) => (
                        <li
                            key={`post-${i}`}
                            className={`${posts.length > 1 ? "flex-col" : "flex-col md:flex-row"} col-span-1 bg-white flex rounded-lg p-4 gap-2 md:gap-4 hover:shadow-lg duration-300`}
                        >
                            {post.image && (
                                // Use Next.js <Image /> for optimization
                                <Image
                                    src={post.image.src}
                                    alt={post.image.alt}
                                    width={post.image.width || 400}
                                    height={post.image.height || 200}
                                    className={`${posts.length > 1 ? "h-48" : "h-48 lg:h-60"} w-full object-cover rounded-lg`}
                                />
                            )}

                            <div className={`${posts.length > 1 ? "items-start" : "items-start lg:items-end"} flex flex-col`}>
                                <h3 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <p className="flex-1 py-4 border-t-2 border-gray-light" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                <div className="flex justify-between w-full items-center text-sm text-gray">
                                    <p className="italic">
                                        {new Date(post.date).toLocaleDateString()}
                                    </p>
                                    <Link href={post.link} target="_blank" className="text-right text-blue hover:brightness-75 font-bold duration-300">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </ul>

            <div className="flex justify-center w-full">
                <STEMButton
                    dark
                    label="View All Posts"
                    icon={faMagnifyingGlass}
                    action={() => { window.open("https://vtl.sey.mybluehost.me/website_ace37854", "_blank") }}
                />
            </div>
        </div>
    )
}