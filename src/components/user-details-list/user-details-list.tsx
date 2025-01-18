import { Card } from '@components/card/card';
import './user-details-list.css';
import { UserIcon } from '@components/assets/spinner/user-icon/user-icon';

interface UserDetailsData {
  user: {
    id: string;
    name: string;
    phone: string;
    birthDate: string;
    email: string;
    role: string;
  };
}

interface UserDetailsProps {
  data: UserDetailsData;
}

export function UserDetailsList({ data }: UserDetailsProps) {
  const { name, email, phone, birthDate, role, id } = data.user;
  const userDetails = [
    { label: 'Email', value: email },
    { label: 'Telefone', value: phone },
    { label: 'Data de nascimento', value: birthDate },
    { label: 'Cargo', value: role },
    { label: 'Id', value: id },
  ];
  return (
    <div>
      <Card>
        <div className='user-details-content'>
          <div className='icon-name-container'>
            <UserIcon />
            <h1>{name}</h1>
          </div>
          <div className='user-details'>
            {userDetails.map(({ label, value }) => (
              <p key={id} className='user-details-item'>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
