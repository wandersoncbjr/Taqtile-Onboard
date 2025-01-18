import { UserDetailsList } from '@components/user-details-list/user-details-list';
import { useUserDetails } from './hook/use-user-details';
import { LoadingScreen } from '@components/loading-screen/loading-screen';
import './user-details.css';
import { Button } from '@components/button/button';
import { useNavigate } from 'react-router-dom';

export function UserDetails() {
  const { data, error, loading } = useUserDetails();

  const userDetailsData = data ?? [];
  const navigate = useNavigate();

  return (
    <div className='user-details-page'>
      {error && <p>{error.message}</p>}
      <Button onClick={() => navigate('/')}>Voltar</Button>
      <div className='user-details-container'>
        {loading ? <LoadingScreen /> : <UserDetailsList data={userDetailsData} />}
      </div>
    </div>
  );
}
