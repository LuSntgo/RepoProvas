import * as S from './style';
import ToastAnimated, { showToast } from '../../component/ui-lib/ui-lib';
import study from './assets/womanStudy.svg';
import { HeaderClean } from '../../component/header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Form, MaskedInput, TextInput } from 'grommet';
import Loading from '../../component/loading/Loading';
import * as api from '../../service/api';
import useAuth from '../../hooks/useAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();

  useEffect(() => {
    if (auth && auth.token) {
      navigate('/home');
    }
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.email || !formData.password) {
      showToast({
        type: 'error',
        message: 'Ops! Os campos não podem ficar em branco',
      });
    }
    try {
      const { data } = await api.signIn({ ...formData });
      setIsLoading(false);
      login(data);
      navigate('/home');
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.response.status === 404) {
        setFormData({
          email: '',
          password: '',
        });
        showToast({
          type: 'error',
          message: 'Usuário não existente, faça um cadastro, por favor.',
        });

        return;
      }
    }
  }

  return (
    <>
      <S.Container>
        <ToastAnimated />
        <HeaderClean />
        <S.Content>
          <S.LeftBox>
            <S.Img src={study} alt="woman-study" />
          </S.LeftBox>
          <S.RightBox>
            <Box fill align="center" justify="center">
              <Box width="medium">
                <Form onSubmit={handleSubmit}>
                  <S.formField
                    label="Email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    disabled={isLoading}
                    value={formData.email}
                  >
                    <MaskedInput
                      name="email"
                      mask={[
                        { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                        { fixed: '@' },
                        { regexp: /^[\w]+$/, placeholder: 'my' },
                        { fixed: '.' },
                        { regexp: /^[\w]+$/, placeholder: 'com' },
                      ]}
                    />
                  </S.formField>
                  <S.formField
                    label="Senha"
                    name="password"
                    htmlFor="password"
                  >
                    <TextInput
                      name="password"
                      id="password"
                      type="password"
                      onChange={handleChange}
                      disabled={isLoading}
                      value={formData.password}
                    />
                  </S.formField>
                  <Box
                    align="center"
                    justify="center"
                    margin={{ top: 'medium' }}
                  >
                    <S.Button type="submit" disabled={isLoading}>
                      {isLoading ? <Loading /> : 'Entrar'}
                    </S.Button>
                  </Box>
                </Form>
              </Box>
            </Box>
            <S.StyledLink to="/sign-up">
              Primeiro acesso? Cadastre-se aqui!
            </S.StyledLink>
          </S.RightBox>
        </S.Content>
      </S.Container>
    </>
  );
}
