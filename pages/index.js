import { Fragment } from "react";
import Head from "next/head";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/post-util";
import FeaturedPosts from "@/components/home-page/featured-posts";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Haroon' Blog</title>
                <meta name='description' content="Posts about development" />

            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export default HomePage;
// 1) Hero section
// 2) Featured Section
// 3) Nav bar which is the part of _app.js

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts,
        }
    }
}