import Head from 'next/head';

interface Props {
  title?: string;
}

const AppHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{ title ? title : 'Create Next App' }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default AppHead;
