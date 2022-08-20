import { Center, Heading, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import { BlogPostSummary } from "../../components/blog"
import { personalPosts } from "../../content/blog/personal"

const Experience: NextPage = () => {
  const postKeys = Object.keys(personalPosts).reverse()
  const allPosts = postKeys.map((_key) => personalPosts[_key])

  return (
    <>
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Personal Blog
        </Heading>
      </Center>
      <Center>
        <VStack>
          {allPosts.map((_post, index) => (
            <BlogPostSummary key={postKeys[index]} postKey={postKeys[index]} post={_post} />
          ))}
        </VStack>
      </Center>
    </>
  )
}

export default Experience
