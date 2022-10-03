import React from 'react';
import {SafeAreaView} from 'react-native'

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
                <ButtonSocialFacebook title="Facebook"/>
              </ViewButton>

          </ContentHeader>

          <ContentBody>

          </ContentBody>

          <ContentFooter>

          </ContentFooter>

        </Container>
    </SafeAreaView>

  )
}

export {Login} ;
