import React from 'react';

const Watchlist = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px',textAlign:'center' }}>
      <h2 style={{ borderBottom: '1px solid white', paddingBottom: '10px', textAlign:'left' }}>From your Watchlist</h2>
      <button style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', position: 'relative' }}>
        <svg className="ipc-watchlist-ribbon__bg" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <polygon className="ipc-watchlist-ribbon__bg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
          <polygon className="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
          <polygon className="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="currentColor" role="presentation" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
        </svg>
      </button>
      <p>Sign in to access your Watchlist</p>
      <p>Save shows and movies to keep track of what you want to watch.</p>
      <button style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '10px 20px', cursor:'pointer' }}>
        Sign in
      </button>
    </div>
  );
}

export default Watchlist;
