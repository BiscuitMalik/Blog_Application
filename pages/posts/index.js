import AllPosts from "@/components/posts/all-posts.module";
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

function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POST} />
    )

}
export default AllPostsPage; 