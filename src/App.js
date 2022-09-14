import { useRef, useState } from 'react';
import { VscDebugPause, VscDebugStart } from 'react-icons/vsc';
import Modal from 'react-modal';
import './App.css';
import LoginForm from './components/LoginForm';

Modal.setAppElement('#root');

function App() {
  // states
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();

  // functions
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const changeVolume = (e) => {
    audioPlayer.current.volume = e.target.value / 100;
  };

  // Modal Styles
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      transform: 'translate(-50%, -50%)',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
      alignItems: 'center',
      color: 'gray',
    },
  };

  return (
    <div className='Main'>
      <div className='soundPlay'>
        <audio
          ref={audioPlayer}
          src='https://drive.google.com/uc?export=view&id=1pecUsLuer7li1A32UbOoX3JYoITRWFRM'
          // src='https://music.youtube.com/watch?v=3R9lbXGuAww'
          type='audio/mpeg'
          preload='metadata'
          loop
          volume='true'
        ></audio>
      </div>

      <div className='soundPlay'>
        <button className='playButton' onClick={togglePlayPause}>
          {isPlaying ? <VscDebugPause /> : <VscDebugStart />}
        </button>
        <input
          type='range'
          className='progressBar'
          defaultValue='50'
          ref={progressBar}
          onChange={changeVolume}
        />
      </div>
      <div className='enterChat'>
        <input
          type='submit'
          className='submit'
          value='Chat Room'
          onClick={() => setModalIsOpen(true)}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(true)}
        style={customStyles}
      >
        <LoginForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
}

export default App;
