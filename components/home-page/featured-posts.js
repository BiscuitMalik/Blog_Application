import PostGrid from '../posts/post-grid';
import classes from './featured-posts.module.css'

function FeaturedPosts(props) {
    return (
        <section className={classes.latest}>
            <h1>Featured Post</h1>
            <PostGrid posts={props.posts} />
        </section>
    )
}
export default FeaturedPosts;