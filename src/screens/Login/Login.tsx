import React from 'react';
import {SafeAreaView} from 'react-native'
import { useTheme } from 'styled-components';


import Input from '../../components/Input/';
import { ButtonSocialGoogle } from '../../components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocialFacebook } from '../../components/ButtonSocialFacebook/ButtonSocialFacebook';
import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter
} from './styles';

const Login: React.FC = () => {
 const {COLORS} = useTheme();

  return (

    <SafeAreaView>
        <Container>

          <ContentHeader>

              <Title>
                Seja Bem Vindo(a) {"\n"} a App Carteira
              </Title>

              <Description>Entrar com Redes Sociais</Description>

              <ViewButton>
                <ButtonSocialGoogle title="Google" />
                <ButtonSocialFacebook iconName= "facebook" title="Facebook"/>
              </ViewButton>

          </ContentHeader>

          <ContentBody>

            <Input
                   LeftIcon
                   iconSize= {25}
                   iconName= "mail-outline"
                   placeholder="Digite seu e-mail"
                   />

            <Input
                   LeftIcon
                   iconSize={25}
                   iconName= 'lock-closed-outline'
                   placeholder="Digite sua senha"
                   />

          </ContentBody>

          <ContentFooter>

          </ContentFooter>

        </Container>
    </SafeAreaView>

  )
}

export {Login} ;
