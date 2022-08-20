import { Center, Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { personalPosts } from "../../content/blog/personal"

const Experience: NextPage = () => {
  return (
    <>
      <Center py={4}>
        <Heading fontSize="2xl" fontWeight={500}>
          Personal Blog
        </Heading>
      </Center>
      <Center>{`This is the personal blogging space :)`}</Center>
    </>
  )
}

export default Experience
