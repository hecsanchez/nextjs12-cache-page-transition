import {Container, Layout, PostBrief} from '@/components'
import {Post} from '@/types/post'
import {getAllPosts} from "@/services/posts";

type Props = {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <>
      <Layout title='Next.js Blog' description='Next.js Blog'>
        <Container>
          {posts.map(post =>
            <PostBrief
              title={post.title}
              id={post.id}
            />
          )}
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const { posts } = await getAllPosts()
  return {
    props: { posts },
  }
}
