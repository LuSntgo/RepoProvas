import * as S from './style';
import ToastAnimated, { showToast } from '../../component/ui-lib/ui-lib';
import study from './assets/boyStudy.svg';
import { HeaderClean } from '../../component/header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Form, MaskedInput, TextInput } from 'grommet';
import Loading from '../../component/loading/Loading';
import * as api from '../../service/api';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (formData.email === '' || formData.password === '') {
      showToast({
        type: 'error',
        message: 'Ops! Os campos não podem ficar em branco',
      });
    }
    if (formData.password !== formData.confirmPassword) {
      showToast({
        type: 'error',
        message: 'As senhas precisam ser iguais, digite novamente.',
      });
    }
    try {
      await api.createUser({ ...formData });
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (error.response.status === 409) {
        setFormData({
          email: '',
          password: '',
          confirmPassword: ''
        });
        showToast({
          type: 'error',
          message: 'Email já existente, faça um cadastro, por favor.',
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
                  <S.formField
                    label="Repita sua senha"
                    name="ConfirmPassword"
                    htmlFor="ConfirmPassword"
                  >
                    <TextInput
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      disabled={isLoading}
                      value={formData.confirmPassword}
                    />
                  </S.formField>
                  <Box
                    align="center"
                    justify="center"
                    margin={{ top: 'medium' }}
                  >
                    <S.Button type="submit" disabled={isLoading}>
                      {isLoading ? <Loading /> : 'Cadastre-se'}
                    </S.Button>
                  </Box>
                </Form>
              </Box>
            </Box>
            <S.StyledLink to="/">
              Já tem cadastro? Faça seu logIn aqui!
            </S.StyledLink>
          </S.RightBox>
        </S.Content>
      </S.Container>
    </>
  );
}
