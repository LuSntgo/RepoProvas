import * as S from './style';
import { useNavigate } from 'react-router-dom';
import RepoProvas from './assets/repoProvas.svg';
import { User, Power, Favorite, Github } from 'grommet-icons';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  const { logoff } = useAuth();

  function logout() {
    logoff();
    navigate('/');
  }

  return (
    <div>
      <S.Header>
        <S.AccountIcon>
          <S.Account
            icon={<S.IconMenu />}
            dropBackground='#c0886a'
            items={[
              { label: 'Home', color: 'white', icon: <User color= '#f8f7f2'/>, gap: 'small', onClick: () => {navigate('/home');} },
              { label: 'Logout', color: 'white', icon: <Power color= '#f8f7f2'/>, reverse: true, gap: 'small', onClick: () =>  {logout();} },
            ]}
          > 
          </S.Account>
        </S.AccountIcon>
        <S.Logo>
          <S.Img src={RepoProvas} alt="RepoProvas"/>
        </S.Logo>
        <S.Icon>
          <a href="https://github.com/LuSntgo">
            <Github color='#ae6a47' size='40px'  />
          </a>
          <a href="/home">
            <Favorite color='#ae6a47' size='40px'/> 
          </a>
        </S.Icon>
      </S.Header>
    </div>
  );
}

export function HeaderClean() {
  return (
    <S.HeaderClean>
      <S.Content>
        <S.LogoClean src={RepoProvas} alt='repoProvas' />
      </S.Content>
    </S.HeaderClean>
  );
}
