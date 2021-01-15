import { Typography } from '@material-ui/core';
import AppHead from '@components/AppHead';

const Test = ({ testToken }) => {

  return (
    <div>
      <AppHead />
      <main>
        <Typography>
          This page tests that a variable can be read asynchronously from a local .env file.
        </Typography>
        <Typography>{testToken}</Typography>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {

  const testToken = process.env.REACT_APP_TEST;

  return {
    props: {
      testToken,
    }, // will be passed to the page component as props
  };
}

export default Test;
