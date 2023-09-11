import PostContent from "@/components/posts/post-detail/post-content";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage() {
    return <Fragment>
        <Head>
            <title>Dynamic</title>
            <meta name="description" content="Dynamic Content" />
        </Head>
        <PostContent />
    </Fragment>

}
export default PostDetailPage;