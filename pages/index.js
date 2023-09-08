import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
const DUMMY_POST = [
    {
        title: 'Getting start with Nextjs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-12',
        excerpt: 'ad ad q  c zx zc asd as asda sas qw xcz ad ad q  c zx zc asd as asda sas qw xcz ',
        slug: 'getting-started-nextjs'
    },
    {
        title: 'Getting start with Nextjs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-12',
        excerpt: 'ad ad q  c zx zc asd as asda sas qw xcz ad ad q  c zx zc asd as asda sas qw xcz ',
        slug: 'getting-started-nextjs'
    },
    {
        title: 'Getting start with Nextjs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-12',
        excerpt: 'ad ad q  c zx zc asd as asda sas qw xcz ad ad q  c zx zc asd as asda sas qw xcz ',
        slug: 'getting-started-nextjs'
    },
    {
        title: 'Getting start with Nextjs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-12',
        excerpt: 'ad ad q  c zx zc asd as asda sas qw xcz ad ad q  c zx zc asd as asda sas qw xcz ',
        slug: 'getting-started-nextjs'
    }
]

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POST} />
        </Fragment>
    )
}

export default HomePage;
// 1) Hero section
// 2) Featured Section
// 3) Nav bar which is the part of _app.js