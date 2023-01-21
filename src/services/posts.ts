import cache from "@/cache";
import {Post} from "@/types/post";

export const getAllPosts = async (): Promise<{posts: Post[]}> => {
    const url = 'https://dummyjson.com/posts'
    const data = cache.get(url);

    if (!data) {
        console.log('Feching posts data')
        const posts = await fetch(url).then(res => res.json())
        cache.set(url, posts);

        return posts;
    }

    return data as {posts: Post[]};
}
export const getPostById = async (id): Promise<Post> => {
    const url = `https://dummyjson.com/posts/${id}`
    const data = cache.get(url);

    if (!data) {
        console.log('Feching posts data')
        const posts = await fetch(url).then(res => res.json())
        cache.set(url, posts);
        return posts;
    }

    return data as Post;
}
