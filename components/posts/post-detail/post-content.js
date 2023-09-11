import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header"
import classes from './post-content.module.css'

// const post =
// {
//     title: 'Getting start with Nextjs',
//     image: 'getting-started-nextjs.png',
//     date: '2022-02-12',
//     content: '# this is heading',
//     slug: 'getting-started-nextjs'
// }


function PostContent(props) {
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}
export default PostContent;