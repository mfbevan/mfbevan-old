import { Center, Heading, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { Markdown, PostNotFound, BlogPost } from "../../../components/blog"
import { personalPosts } from "../../../content/blog/personal"

const BlogPostPage: NextPage = () => {
  const router = useRouter()

  const { postId } = router.query

  if (!postId) {
    return <PostNotFound />
  }

  const postData = personalPosts[postId as string]
  if (!postData) {
    return <PostNotFound />
  }

  const Post = postData.post

  return (
    <>
      <Center py={4}>
        <VStack>
          <Heading fontSize="2xl" fontWeight={500}>
            {postData.name}
          </Heading>
          <Heading fontSize="sm" fontWeight={500}>
            {postData.date.toDateString()}
          </Heading>
        </VStack>
      </Center>
      <BlogPost>
      <Post components={Markdown} />
      </BlogPost>
    </>
  )
}

export default BlogPostPage
