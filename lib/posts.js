import fetch from 'node-fetch';
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// エンドポイント（apiUrl）にアクセスする関数
export async function getAllPostData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

// IDの一覧を取得する関数
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
        // 数値を文字列に変換
      }
    }
  })
}
// オブジェクトには必ずパラムスが必要
// （getStaticPathsのルール）
// [
//   {
//     params: {
//       id: 1,
//     },
//     params: {
//       id: 2,
//     },
//   },
// ];

// IDの中身を取得する関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return post;
}
