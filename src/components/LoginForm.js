import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import io from 'socket.io-client';
import ChatRoom from './ChatRoom';

const socket = io.connect('https://asmrwebserver.herokuapp.com/');

function LoginForm({ setModalIsOpen }) {
  const [user, setUser] = useState({ name: '' });
  const [showChat, setShowChat] = useState(false);
  const room = 'CHAT_APP';

  const joinRoom = () => {
    socket.connect();
    if (user.name !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  // console.log(user, room);

  return (
    <div className='App'>
      {!showChat ? (
        <div className='login-window'>
          <div className='login-header'>
            <h2>Enter the chatroom</h2>
            <AiOutlineClose
              className='quit-window'
              onClick={() => setModalIsOpen(false)}
            />
          </div>
          <div className='login-footer'>
            <input
              type='text'
              placeholder='name'
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              onKeyPress={(e) => {
                e.key === 'Enter' && joinRoom();
              }}
              value={user.name}
              required
            />
            <button className='chat-enter' onClick={joinRoom}>
              &#8629;
            </button>
          </div>
        </div>
      ) : (
        <ChatRoom
          socket={socket}
          user={user}
          room={room}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </div>
  );
}

export default LoginForm;
