import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button, IconeFacebook, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string
  iconName: React.ComponentProps<typeof Fontisto>["name"]
}

const ButtonSocialFacebook: React.FC<Props> = ({title, iconName, ...rest}) => {
  return (

    <Button {...rest}>

      <IconeFacebook name = {iconName} />

      <Title>{title}</Title>

    </Button>
  )
}

export  {ButtonSocialFacebook};
