import JobsList from "../components/JobsList";

const jobs = [
  {
    "slug": "frontend",
    "title": "Front-end Developer (React)"
  },
  {
    "slug": "developer",
    "title": "Smart Contract Developer (Soldiity)"
  },
  {
    "slug": "designer",
    "title": "UI/UX Designer"
  },
  
]

export default function Home({ Component, pageProps }) {  
  return (<>
    <JobsList jobs={jobs}  />
    </>
  );
};

