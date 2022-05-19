const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  getPostSerialized(ids);
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

const getPostSerialized = async (ids) => {
  for (let i = 0; i < ids.length; i++) {
    const data = await getPost(ids[i]);
    console.log(data);
  }
  console.log("I will wait 4u");
};
