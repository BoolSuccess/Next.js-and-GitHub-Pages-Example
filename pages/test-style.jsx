import { useEffect, useState } from "react";



export default function DashboardPage({description,requirements = [""], responsibilites = [""],title}) {

  const states = [
    "Looking up kittens online...",
    "Found cute pics..",
    "Forwarding to all my friends..",
    "Donating to charity...",
    "Doing good deeds..."
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const loremSplit = lorem.split(" ");

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if(loremSplit.length < count) {
        setText("");
        setCount(0);
      } else {
        if(count == 0){
          setText(text + loremSplit[count]);
        } else {
          setText(text + " " + loremSplit[count]);

        }
        if(getRandomInt(20) == 1) {
          setText(text + "\n" + states[getRandomInt(states.length)] + "\n");
          setCount(0)
        } else {
          setCount(count + 1);
        }
      }

    }, 100);

    //Clearing the interval
    return () => clearInterval(interval);
}, [text]);

  return (
    <main className="gloBody h-screen w-screen" >
    <div className="output-console max-w-xl px-4">{text}</div>

    </main>
  );
};



const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut quam non enim euismod facilisis et vel diam. Mauris nec dui congue, finibus lectus ut, egestas nunc. Mauris euismod tellus vel nibh blandit dapibus. Suspendisse scelerisque venenatis dui, vitae luctus purus tempor a. Cras at venenatis lacus, vitae luctus libero. Duis convallis dui eget arcu molestie, vel pretium risus egestas. Sed nulla lectus, maximus eu imperdiet quis, fermentum id ex. Pellentesque vel felis et diam fringilla aliquam. Nam et magna in dolor maximus malesuada vel maximus arcu. Mauris tincidunt placerat sollicitudin."