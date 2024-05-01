import Head from "next/head";
import { prefix } from "../utils/prefix";


const smallLogo = () => <section className='text-white flex flex-row justify-center pt-4 items-center'>
    <div className='text-xs bg-[#FF9900] rounded-sm drop-shadow-sm  p-0.5 mr-0.5'>
      THE
    </div>
    <div className='text-xs  bg-[#3C3C3D]  rounded-sm drop-shadow-sm p-0.5  '>
      RATIO
    </div>
  </section>;



export default function JobsList({jobs=[]}) {

  return (
    <main >
      <Head>
      <title>Jobs at The Ratio</title>
      <meta name="description" content="You have no idea whats coming" />
      <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>

    <div className='min-h-screen  bg-[#f0f0f0] w-full flex flex-col items-center justify-between'>
      {smallLogo()}

      <div className=" max-w-4xl mx-10 my-4 px-10 py-4 md:mx-16 rounded bg-white border-[#696969] shadow-lg text-left">

        <div className="text-4xl my-2 font-semibold max-w-xl">
          Jobs
        </div>


        <div className="pt-2">
         Why work with <span className="font-semibold">The Ratio?</span>
        </div>

        <div className="pt-2">
         {`We have some of the best minds in crypto designing the next generation of Defi, leaning heavily on the broadest appealing types of applications.
         By working with us, you'll be exposed to a new platform and find your work elevated in to the public light.
         We are funded by independent angel investors, paying competitive rates.`}
        </div>


        <div className="pt-2">
         Our work environment
        </div>

        <div className="pt-2">
         We have a style of responsive and pro-actively planned remote work that fits easily in to your lifestyle.
         As an additional bonus, you will have the option of remaining anonymous and independent, free to persue what you wish during your time with us.
        </div>

        <div className="text-xl pt-4 font-semibold #c2410c">Remote Openings:</div>
          {jobs.map((resp,key)=> <a href={resp.slug} key={resp.slug}><div className="underline" key={resp.slug}>- {resp.title}</div></a>)}


      </div>
      <div className="pb-4">
      {smallLogo()}
      </div>
    </div>


    </main>
  );
};

