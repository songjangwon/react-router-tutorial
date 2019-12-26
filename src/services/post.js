import axios from 'axios';
 
export function getPost(postId) {
    // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
    return axios.get('http://localhost:8000/movies/');
    debugger;
}
export function start_pystock(postId) {
    // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
    return axios.get('http://localhost:8000/users/1/start_pystock/');
    
}

export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}