import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { prefix } from "../utils/prefix";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Ratio</title>
        <meta name="description" content="You have no idea whats coming" />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

      <main className={styles.main}>

        <div className='h-screen w-full bg-[#f0f0f0]'>
          <section className='text-white    font-semibold flex flex-row absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-4xl bg-[#FF9900] rounded-sm drop-shadow-sm  p-3 mx-1'>
              THE
            </div>
            <div className='text-4xl  bg-[#3C3C3D]  rounded-sm drop-shadow-sm p-3 '>
              RATIO
            </div>
          </section>

          
          <div className='text-sm mb-2 text-[#696969] top-10 absolute text-center w-full text-orange-500	'>
            <Link href="/jobs">We are hiring &raquo;</Link>
          </div>

          <div className='text-sm mb-2 text-[#696969] bottom-0 absolute text-center w-full'>
            You have no idea whats coming.
          </div>


        </div>

      </main>

    </div>
  );
};

export default Home;
