import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { STEMButton } from "../Buttons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Post } from "@/utils/types";



export const ResearchContent = () => {
    const category = "12";
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [postPage, setPostPage] = useState(1);
    const _POSTS_PER_PAGE = 3;

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const res = await fetch(`/api/wp-posts?categoryId=${category}`);
            const data: Post[] = await res.json();

            console.log("Fetched posts:", data);
            setPosts(data); // Limit to 6 posts for preview
            setLoading(false);
        }

        fetchPosts();
    }, [category]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full flex flex-col-reverse xl:flex-col gap-8 lg:max-w-4/5">
            <ul className={`grid ${posts.length >= 3 ? "grid-cols-1 xl:grid-cols-3" : "grid-cols-1"} gap-4`}>
                {posts.length > 0 ? (
                    posts.slice((postPage - 1) * _POSTS_PER_PAGE, postPage * _POSTS_PER_PAGE).map((post: Post, i) => (
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

                            <div className={`${posts.length > 1 ? "items-start" : "items-start lg:items-end"} flex-1 flex flex-col`}>
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
                    // posts.map((post: Post, i) => (
                    //     <li
                    //         key={`post-${i}`}
                    //         className={`${posts.length > 1 ? "flex-col" : "flex-col md:flex-row"} col-span-1 bg-white flex rounded-lg p-4 gap-2 md:gap-4 hover:shadow-lg duration-300`}
                    //     >
                    //         {post.image && (
                    //             // Use Next.js <Image /> for optimization
                    //             <Image
                    //                 src={post.image.src}
                    //                 alt={post.image.alt}
                    //                 width={post.image.width || 400}
                    //                 height={post.image.height || 200}
                    //                 className={`${posts.length > 1 ? "h-48" : "h-48 lg:h-60"} w-full object-cover rounded-lg`}
                    //             />
                    //         )}

                    //         <div className={`${posts.length > 1 ? "items-start" : "items-start lg:items-end"} flex-1 flex flex-col`}>
                    //             <h3 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                
                    //             <p className="flex-1 py-4 border-t-2 border-gray-light" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                
                    //             <div className="flex justify-between w-full items-center text-sm text-gray">
                    //                 <p className="italic">
                    //                     {new Date(post.date).toLocaleDateString()}
                    //                 </p>

                    //                 <Link href={post.link} target="_blank" className="text-right text-blue hover:brightness-75 font-bold duration-300">
                    //                     Read More
                    //                 </Link>
                    //             </div>
                    //         </div>
                    //     </li>
                    // ))
                ) : (
                    <p>No posts available.</p>
                )}
            </ul>

            {posts.length > _POSTS_PER_PAGE && (
                <ul className="flex w-full flex-row items-center justify-center ">
                    {Array.from({ length: Math.ceil(posts.length / _POSTS_PER_PAGE) }, (_, i) => i + 1).map((pageNum) => (
                        <li key={`page-${pageNum}`} className="mx-2">
                            <button
                                onClick={() => setPostPage(pageNum)}
                                className={`${postPage === pageNum ? "bg-blue text-white hover:brightness-125" : "hover:ring-2"} ring-blue p-2 w-8 h-8 rounded-full flex items-center justify-center font-bold hover:cursor-pointer duration-300`}
                            >
                                {String(pageNum)}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}