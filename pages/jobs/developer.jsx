import JobPage from "../../components/JobsPage";

const responsibilites = [
  "Collaborate with the development team to design and implement a visually appealing and functional front-end for the DeFi application.",
  "Work closely with the blockchain developers to ensure seamless integration between the front-end and smart contracts.",
  "Continuously optimize the user experience and adapt the front-end based on user feedback and changing project requirements.",
  "Stay up-to-date with industry trends and best practices in front-end development, particularly within the DeFi space.",
  ];
  
  const requirements = [
  "Proven experience as a front-end developer, preferably with React and Ethers.js or similar web3 framework.",
  "Strong understanding of blockchain technology, specifically EVM-compatible chains.",
  "Familiarity with DeFi applications and their unique requirements.",
  "Experience working with decentralized remote teams using git for version control.",
  "Ability to work independently and collaboratively within a remote team environment.",
  "Excellent communication skills and a proactive approach to problem-solving.",
  "Availability to start immediately and commit to ongoing work.",
  "Willingness to be paid in crypto.",
  "Willingness to communicate primarily on Telegram"
  ]
  
  const title = "Front-End Developer for DeFi Application"
  const description = "We are seeking a skilled front-end developer to join our team and work on a DeFi application built on EVM-compatible chains. The project is currently in the smart contract finalization stage, and we are looking to develop a user-friendly front-end that will initially serve as a marketing page and later evolve into a full dashboard for the DeFi app. Our team prefers working with React-based front-ends using Ethers.js to connect to the blockchain, process incoming events, and allow for user interactions with their browser extension based wallet such as Metamask."
  

export default function Home({ Component, pageProps }) {  
  return (<>
    <JobPage responsibilites={responsibilites} requirements={requirements} title={title} description={description} />
    </>
  );
};

