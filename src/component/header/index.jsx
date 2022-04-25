import * as S from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RepoProvas from './assets/repoProvas.svg';
import { User, Power, Favorite, Github, Menu } from 'grommet-icons';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  const { logoff } = useAuth();
  const [menuColor, setMenuColor] = useState('#f8f7f2');

  console.log(logoff);

  addEventListener('resize', () => {
    if (window.screen.width > 738) {
      setMenuColor('#f8f7f2'); 
    } else {
      setMenuColor('#c0886a');
    }
  }); 

  function logout() {
    logoff();
    navigate('/home');
  }

  return (
    <div>
      <S.Header>
        <S.AccountIcon>
          <S.Account
            icon={<Menu color={menuColor}/>}
            dropBackground='#c0886a'
            items={[
              { label: 'Home', color: 'white', icon: <User color= '#f8f7f2'/>, gap: 'small', onClick: () => {logout();} },
              { label: 'Logout', color: 'white', icon: <Power color= '#f8f7f2'/>, reverse: true, gap: 'small', onClick: () => {navigate('/');} },
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
