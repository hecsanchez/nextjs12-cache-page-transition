import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import {getPostById} from "@/services/posts";
import {Container, Layout, PostContent, BackLink, PostTitle} from "@/components";

interface PostProps {
  id: string;
}

export default function Post({ id }: PostProps) {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(()=>{
    const fetchPost = async (id) => {
      const postData = await getPostById(id);
      setPost(postData)
    };
    fetchPost(id)
  }, [id])

  return post ? (
    <Layout title={post.title} description={post.title}>
      <Container>
        <article>
          <BackLink/>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.body}</PostContent>
        </article>
      </Container>
    </Layout>
  ): null
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.slug
    }
  }
}
