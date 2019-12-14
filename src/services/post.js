import axios from 'axios';
 
export function getPost(postId) {
    // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
    return axios.get('https://http://127.0.0.1:8000/movies/');
}
 
export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}