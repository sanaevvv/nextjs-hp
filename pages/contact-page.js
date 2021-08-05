import Layout from '../components/Layout';
import Image from 'next/image';

export default function blog() {
  return (
    <Layout title="contact">
      <h1>contact info</h1>
      <Image src="/avatar.jpg"
        width={60} height={60}
        alt="Avatar"
      />
    </Layout>
  );
}
