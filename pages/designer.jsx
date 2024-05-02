import JobPage from "../components/JobsPage";

const responsibilites = [
  "Collaborate with the development team to design and implement a visually appealing and functional front-end design for the DeFi application.",
  ];
  
  const requirements = [
  "Proven experience as a front-end designer, preferably some knowledge of React and ability to perform updates",
  "A strong visual aesthetic and sense of style",
  "Willingness to be paid in USDC or DAI",
  "Willingness to communicate primarily on Telegram"
  ]
  
  const title = "Front-End Designer for DeFi Application"
  const description = `
  We are seeking a skilled web/ui designer to join our team and work on a DeFi application built on EVM-compatible chains.
  The project is currently in the smart contract finalization stage, and we are looking to develop a user-friendly front-end
  that will initially serve as a marketing page and later evolve into a full dashboard for the DeFi app. Our team prefers working
  with tools such as figma, sketch, and similar products to workshop designs as a team.
  `
  

export default function Home({ Component, pageProps }) {  
  return (<>
    <JobPage responsibilites={responsibilites} requirements={requirements} title={title} description={description} />
    </>
  );
};

