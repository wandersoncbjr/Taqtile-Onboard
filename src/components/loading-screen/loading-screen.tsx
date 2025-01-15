import { Spinner } from '@components/assets/spinner';
import './loading-screen.css';

export function LoadingScreen() {
  return (
    <div className='loading-screen-container'>
      <Spinner />
    </div>
  );
}
