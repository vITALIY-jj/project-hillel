//1
fetch ('https://jsonplaceholder.typicode.com/posts')
.then(response => {
  if (!response.ok) {
    throw new Error (`HTTP Error ${response.status}`);
  }

  return response.json();
})

.then(post => {
  console.log(`find ${posts.length} post`);
  console.log(`first post ${posts[0].title}`);
})

.catch(error => {
  console.error('not trying dowloading posts:', error.mesage);;
});

//2 

async function LoadPosts() {
  try {
    const response = await fetch (
       'https://jsonplaceholder.typicode.com/posts'
    );

    if (!response.ok) {
    throw new Error (`HTTP Error ${response.status}`);
  }

  const post = await response.json();

  console.log(`find ${posts.length} post`);
  console.log(`first post ${posts[0].title}`);

  } catch (error) {
    console.error('not trying dowloading posts:', error.mesage);
  }
  
};