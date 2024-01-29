import { Center, Heading, Spinner, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Markdown, PostNotFound, BlogPost } from "../../../components/blog";
import { personalPosts } from "../../../content/blog/personal";

const BlogPostPage: NextPage = () => {
  const router = useRouter();

  const { postId } = router.query;

  if (!postId) {
    return (
      <Center p={10}>
        <Spinner />
      </Center>
    );
  }

  const postData = personalPosts[postId as string];
  if (!postData) {
    return <PostNotFound />;
  }

  const Post = postData.post;

  return (
    <>
      <VStack py="100px">
        <Heading fontSize="4xl" textAlign="left">
          {postData.name}
        </Heading>
        <Heading fontSize="sm" fontWeight={500}>
          {postData.date.toDateString()}
        </Heading>
      </VStack>
      <BlogPost>
        <Post components={Markdown} />
      </BlogPost>
    </>
  );
};

export default BlogPostPage;
