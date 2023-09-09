import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header"
import classes from './post-content.module.css'

const DUMMY_DATA =
{
    title: 'Getting start with Nextjs',
    image: 'getting-started-nextjs.png',
    date: '2022-02-12',
    content: '# this is heading',
    slug: 'getting-started-nextjs'
}


function PostContent() {

    const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_DATA.title} image={imagePath} />
            <ReactMarkdown>
                {DUMMY_DATA.content}
            </ReactMarkdown>
        </article>
    )

}
export default PostContent