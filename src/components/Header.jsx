import '../App.css';

const Header = ({ handleLocation }) => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <button id='about' onClick={handleLocation} style={{ marginRight: '20px' }}>
        About
      </button>
      <button id='projects' onClick={handleLocation} style={{ marginRight: '20px' }}>
        Projects
      </button>
      <button id='extra' onClick={handleLocation}>
        Additional info + contact
      </button>
    </div>
  );
};

export default Header;