import React from 'react';
import Header from './Header';

function App(){
  return (
    <div>
      <style jsx global>{`
            body {
                background-image: url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-0.3.5&s=130bd6edc8aba4019a8245472d106ebb&auto=format&fit=crop&w=1950&q=80');
                background-size:cover;
            }
        `}</style>

      <Header/>
    </div>
  );
}

export default App;