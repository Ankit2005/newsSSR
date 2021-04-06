import React from 'react'
import Profile from '../../components/profile'
import { getAllIds, getUserDataById } from '../../lib/users'
import Head from "next/head";
const UserProfile = ({ userData }) => {
  return (

    <>
   
      <Head>
        <meta property="og:title" content={userData.heading} />
        <meta property="og:description" content={userData.subheading} />
        <meta property="og:image" content={userData.url} />
        {/* <meta
          property="og:url"
          content={`http://localhost:3000/users/${userData.id}`}
        /> */}
        {/* <meta
          property="og:url"
          content={`https://news-page11.vercel.app/${userData.id}`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Profile {...{ userData }} />
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllIds()
  return {
    paths,
    fallback: true
  }
}


// getServerSideProps()
// }
// export const getStaticProps = async ({ params }) => {


export async function getStaticProps({ params }) {
  const userData = await getUserDataById(params.id)
  console.log("testing obj");
  console.log(params);
  return {
    props: {
      userData
    }
  }
}



// teting 

// export const getServerSideProps = async (context) => {

//   const userData = await getUserDataById(params.id)
//   const res = await axios.get(
//     "https://article1229.herokuapp.com/readdata/" + id
//   );
//   const data = res.data;

//   return {
//     props: { news: data },
//   };
// };

export default UserProfile