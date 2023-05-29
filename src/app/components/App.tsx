import React from 'react';
// import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {
  // const textbox = React.useRef<HTMLInputElement>(undefined);

  // const countRef = React.useCallback((element: HTMLInputElement) => {
  //   if (element) element.value = '5';
  //   textbox.current = element;
  // }, []);

  const onCreate = () => {
    // const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles' } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div>
      {/* <img src={logo} /> */}
      <h2>Immo Assistant_</h2>
      <h3>Hey there 👋</h3>
      <p>My name is Immo, and I am your assistant 😊 I'm happy to help you with creating a template for your Figma File 🚀</p>
      <p>Use the button bellow to try me out!</p>
      <br/>
      {/* <p>
        Count: <input ref={countRef} />
      </p> */}
      <button id="create" onClick={onCreate}>
        Create Template
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default App;
