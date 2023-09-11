import AllPosts from "@/components/posts/all-posts.module";
import Head from "next/head";
import { getAllPost } from "@/lib/post-util";
import { Fragment } from "react";


function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All posts</title>
                <meta name="description" content="All posts related to programming" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )

}

export function getStaticProps() {
    const allPosts = getAllPost()
    return {
        props: {
            posts: allPosts
        }
    }
}
export default AllPostsPage; 