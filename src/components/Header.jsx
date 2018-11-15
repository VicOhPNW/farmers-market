import React from 'react';

function Header(){
  let styledHeader = {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: 75,
    fontWeight: 'bold',
    fontFamily: 'Gloria Hallelujah, cursive',
    letterSpacing: 4
  };

  return (
    <div style={styledHeader}>
      <div className="jumbotron">
        <style jsx>{`
        .jumbotron {
          background-color: rgba(15, 117, 1, 0.6);
          border-radius: 50px;
        }
      `}</style>
        <p>Avery's Organics</p>
      </div>
    </div>
  );
}

export default Header;