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



export default function Job({description,requirements = [""], responsibilites = [""],title}) {

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
          {title}
        </div>

        <div className="pt-4">
          Job Title: <span className="font-semibold">{title}</span>
        </div>

        <div className="pt-2">
          Job Type:  <span className="font-semibold">Contract (Paid in Crypto)</span>
        </div>

        <div className="pt-2">
          Location: <span className="font-semibold">Remote</span>
        </div>


        <div className="max-w-xl pt-4">
          {description}
        </div>

        <div className="text-xl pt-4 font-semibold">Responsibilities:</div>
          {responsibilites.map((resp,key)=> <div key={key}>- {resp}</div>)}

        <div className="text-xl mt-4 font-semibold">Requirements:</div>
          {requirements.map((resp,key )=> <div key={key}>- {resp}</div>)}

        <div className="pt-8">
          To Apply:

          Please provide your github link, cv, availability, along with details about your background, experience, how you like to work, 
          and what you would like to work on. Apply with a direct message on Telegram to <a className="underline text-blue-500" href="https://t.me/witecrypto" target="_blank">@witecrypto</a>
        </div>

      </div>
      <div className="pb-4">
      {smallLogo()}
      </div>
    </div>


    </main>
  );
};

