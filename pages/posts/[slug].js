import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/post-util";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
    return <Fragment>
        <Head>
            <title>Dynamic</title>
            <meta name="description" content="Dynamic Content" />
        </Head>
        <PostContent post={props.post} />
    </Fragment>

}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    const postData = getPostData(slug)
    return {
        props: {
            post: postData
        },
        revalidate: 600

    }
}

export function getStaticPaths() {
    const filenames = getPostFiles()
    const slugs = filenames.map((filename) => filename.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    };
}
export default PostDetailPage;