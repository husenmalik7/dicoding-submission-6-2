import ThreadsIcon from '../assets/icons/ThreadsIcon';
import LeaderboardsIcon from '../assets/icons/LeaderboardsIcon';
import LoginIcon from '../assets/icons/LoginIcon';

import { useNavigate } from 'react-router-dom';

function Footer({ authUser, logout }) {
  const navigate = useNavigate();

  function renderLoginLogout() {
    if (authUser)
      return (
        <div onClick={logout} className="flex cursor-pointer flex-col items-center">
          <LoginIcon />
          <p>Logout</p>
        </div>
      );

    return (
      <div onClick={() => navigate('/login')} className="flex cursor-pointer flex-col items-center">
        <LoginIcon />
        <p>Login</p>
      </div>
    );
  }

  return (
    <footer>
      <div className="fixed bottom-0 flex h-16 w-full items-center justify-center gap-8 border-1 border-gray-300 bg-white">
        <div onClick={() => navigate('/')} className="flex cursor-pointer flex-col items-center">
          <ThreadsIcon />
          <p>Threads</p>
        </div>
        <div onClick={() => navigate('/leaderboards')} className="flex cursor-pointer flex-col items-center">
          <LeaderboardsIcon />
          <p>Leaderboards</p>
        </div>
        {renderLoginLogout()}
      </div>
    </footer>
  );
}

export default Footer;
