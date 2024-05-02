import ModelRenderer from "../components/ModelRenderer";
import { Canvas } from '@react-three/fiber'

export default function Home({ Component, pageProps }) {  
  return (
    <main className="gloBody h-screen w-screen" >
        <Canvas>
            {/* <div className="output-console max-w-xl px-4">{text}</div> */}
            <ModelRenderer className="h-screen w-screen" />
        </Canvas>
    </main>
  );
};


// <main className="gloBody h-screen w-screen" >
// <div className="output-console max-w-xl px-4">{text}</div>

// </main>