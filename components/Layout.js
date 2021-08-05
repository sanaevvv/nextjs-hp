import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Layout({ children, title = 'HP by Next.js' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/blog-page">
            <a>Blog</a>
          </Link>

          <Link href="/contact-page">
            <a>Contact</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
