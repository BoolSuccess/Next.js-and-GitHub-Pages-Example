import JobPage from "../../components/JobsPage";

const responsibilites = [
  "Collaborate with the development team to design and implement secure and efficient smart contracts for the DeFi application using Solidity.",
  "Write clean, audited, and optimized code while adhering to best practices in smart contract development.",
  "Develop comprehensive test suites for real-world scenarios to ensure the smart contracts function as intended.",
  "Understand the economics of the DeFi system and help optimize tokenomics and incentive structures.",
  "Anticipate economic scenarios and help prevent potential issues by implementing appropriate security measures and controls.",
  "Stay up-to-date with industry trends and best practices in smart contract development, particularly within the DeFi space."
  ];
  
  const requirements = [
  "Proven experience as a smart contract developer, preferably with Solidity.",
  "Strong understanding of blockchain technology, specifically EVM-compatible chains.",
  "Familiarity with DeFi applications and their unique requirements.",
  "Experience working with decentralized remote teams using git for version control.",
  "Ability to work independently and collaboratively within a remote team environment with limited calls and formal meetings.",
  "Excellent written communication skills and a proactive approach to problem-solving.",
  "Availability to commit to ongoing work.",
  "Willingness to be paid in crypto.",
  "Willingness to communicate primarily on Telegram"
  ]
  
  const title = "Smart Contract Developer for DeFi Application"
  const description = " We are seeking a skilled smart contract developer to join our team and work on a DeFi application built on EVM-compatible chains. The project is currently in the finalization stage, and we are looking to develop and deploy secure and efficient smart contracts that will serve as the backbone of the DeFi app. Our team prefers working with Solidity, and we require a developer who can write clean, optimized, and well-documented code. The smart contracts will be integrated with a React-based front-end using Ethers.js.";
  
  export default function Home({ Component, pageProps }) {  
    return (<>
      <JobPage responsibilites={responsibilites} requirements={requirements} title={title} description={description} />
    </>
  );

};

