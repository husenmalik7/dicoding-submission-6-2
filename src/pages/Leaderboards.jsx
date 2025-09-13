import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function Leaderboards() {
  const { data: leaderboards, isLoading } = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-medium">Klasemen Pengguna Aktif</h2>

      <div className="mb-2 flex w-full justify-between text-xl">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>

      {leaderboards.map((leaderboard, index) => (
        <div key={index} className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="mr-2 h-10 rounded-full"
              src={leaderboard.user.avatar}
              alt={leaderboard.user.name}
            />
            <p className="text-xl">{leaderboard.user.name}</p>
          </div>
          <p className="text-xl">{leaderboard.score}</p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboards;
