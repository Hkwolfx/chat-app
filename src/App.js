import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact image="https://randomuser.me/api/portraits/women/43.jpg" character="Lolita Ferrari" online={true} />
      <Contact image="https://randomuser.me/api/portraits/women/58.jpg" character="Carmen Elektra" online={false} />
      <Contact image="https://randomuser.me/api/portraits/women/60.jpg" character="Alexis Texas" online={false} />
    </div>
  );
}

// Ici on appelle les props déclaré dans Contact.js, //

export default App;
