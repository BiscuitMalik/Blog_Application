
// for fetching data we make another folder 
import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts')

function getPostData(filename) {
    const filePath = path.join(postDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent) // return metadata object and content 
    const postsSlug = filename.replace(/\.md$/, '')// remove file extension 
    const postData = {
        slug: postsSlug,
        ...data,
        content: content
    }

    return postData;
}

function getAllPost() {
    const postsfiles = fs.readdirSync(postDirectory);
    const allPosts = postsfiles.map(postsfile => {
        return getPostData(postsfile);
    })

    const sortedPosts = allPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date);
    });
    return sortedPosts;
}

function getFeaturedPosts() {
    const allPosts = getAllPost()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts;
}

