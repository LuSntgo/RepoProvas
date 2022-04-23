import * as S from './style';
import { useNavigate } from 'react-router-dom';
import RepoProvas from './assets/RepoProvas.svg';
import { User, Power, Favorite, Github, Menu } from 'grommet-icons';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <S.Header>
        <S.AccountIcon>
          <S.Account
            icon={<Menu color= '#f8f7f2'/>}
            dropBackground='#c0886a'
            items={[
              { label: 'Home', color: 'white', icon: <User color= '#f8f7f2'/>, gap: 'small', onClick: () => {navigate('/');} },
              { label: 'Logout', color: 'white', icon: <Power color= '#f8f7f2'/>, reverse: true, gap: 'small', onClick: () => {navigate('/');} },
            ]}
          > 
        
          </S.Account>
        </S.AccountIcon>
        <S.Img src={RepoProvas} />
        <S.Icon>
          <a href="/">
            <Github color='#ae6a47' size='40px'  />
          </a>
          <a href="/">
            <Favorite color='#ae6a47' size='40px'/> 
          </a>
        </S.Icon>
      </S.Header>
    </div>
  );
}
