import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, IconeGoogle, Title } from "./styles";

import PngGoogle from '../../assets/google.png'

interface Props extends RectButtonProps {
  title: string
}

const ButtonSocialFacebook: React.FC<Props> = ({title, ...rest}) => {
  return (

    <Button {...rest}>



      <Title>{title}</Title>

    </Button>
  )
}

export  {ButtonSocialFacebook};
