import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
//all post / feature post /


const postDirectory = path.join(process.cwd(), 'posts')

export function getPostFiles() {
    return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier) {
    const postsSlug = postIdentifier.replace(/\.md$/, '')// remove file extension 
    const filePath = path.join(postDirectory, `${postsSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent) // return metadata object and content 

    const postData = {
        slug: postsSlug,
        ...data,
        content,
    }

    return postData;
}

export function getAllPost() {
    const postsFiles = fs.readdirSync(postDirectory);
    const allPosts = postsFiles.map(postsFile => {
        return getPostData(postsFile);
    })

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPost()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts;
}

