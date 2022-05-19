const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  getPostsConcurrently(ids);
};

document.addEventListener("DOMContentLoaded", initApp);

const getPost = async (id) => {
  return await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
};

// const useForEach = (ids) => {
//   ids.forEach(async (id) => {
//     const data = await getPost(id);
//     console.log(data);
//   });
// };

// const getPostSerialized = async (ids) => {
//   for (let i = 0; i < ids.length; i++) {
//     const data = await getPost(ids[i]);
//     console.log(data);
//   }
//   for (const id of ids) {
//     const data = await getPost(id);
//     console.log(data);
//   }
//   console.log("I will wait 4u");
// };

const getPostsConcurrently = async (ids) => {
  const posts = await Promise.all(ids.map(async (id) => getPost(id)));
  console.log(posts);
  console.log("I will wait 4 u ");
};
