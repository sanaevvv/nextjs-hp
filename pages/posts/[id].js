import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ post }) {
  if (!post) {
    return <div>Loading</div>;
  }
  return <Layout title={post.title}>
    <p>
      {"ID : "}
      {post.id}
    </p>
    <p>{post.title}</p>
    <p>{post.body}</p>
    <Link href="/blog-page">
      ブログページへ
    </Link>
  </Layout>
}
// IDの一覧を取得
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false, // false　=> ユーザーアクセスの該当IDがない場合、404 not found を返す
  };
}
// pathsの中身
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

// 各IDを使って個別データを取得
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

// export async function getAllPostIds() {
//   const res = await fetch(new URL(apiUrl));
//   const posts = await res.json();

//   return posts.map((post) => {
//     return {
//       params: {
//         id: post.id
//       }
//     }
//   })
// }

// ビルド時にデータ取得
