import Layout from "../components/Layout"
import Post from "../components/Post"
import { getAllPostData } from "../lib/posts"

export default function blog({posts}){
  return (
    <Layout title="blog">
      <ul>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

// サーバーサイドでビルド時に実行される関数
export async function getStaticProps() {
  // エンドポイントにアクセスしてデータ取得する関数
  const posts = await getAllPostData();
  return {
    props: {posts},
  }
}
