import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    )
}

export default HomePage;
// 1) Hero section
// 2) Featured Section
// 3) Nav bar which is the part of _app.js