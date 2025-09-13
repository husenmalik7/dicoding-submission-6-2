import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onRegister({ name, email, password }) {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  }

  return (
    <div className="p-8">
      <p className="text-2xl font-medium">Register</p>
      <RegisterInput register={onRegister} />

      <div className="mt-3 flex gap-x-1">
        Sudah punya akun?
        <Link to="/login" className="font-medium text-blue-600 visited:text-purple-600">
          <p>Login di sini</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
