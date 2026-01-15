import React, { StrictMode, useState } from 'react'
//import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'


// React components:Function
// Function:html,css and javascript
// Rules of creating components
//1.Name of the function <components> should start with a capital letter.
//2.The function <components>

// function AboutMe() {
//   return <div>Nicholas Lemeria</div>
// }


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AboutMe/>
//   </StrictMode>,
// );

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
<Counter />
</StrictMode>
);
