import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect
} from "react";
import {useField} from '@unform/core';
import {Ionicons} from '@expo/vector-icons'
import {Text, TextInputProps} from "react-native";
import {useTheme} from 'styled-components';

interface InputRef {
  focus():void;
}

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps{
  name: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"]
  containerStyle?: {[key: string] : string | number };
}

import {Container, IConContainer, InputText } from './styles';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps > = ({
  iconName,
  name,
  value,
  containerStyle,
  ...rest
}) => {
  const theme = useTheme();

  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  return (
    <Container style={containerStyle}>

      <IConContainer
      isFilled={isFilled}
      hasError={hasError}
      isFocused={isFocused}
      >

        <Ionicons
          name={iconName}
          size={25}
          color={isFocused || hasError || isFilled ? theme.COLORS.BLUE1 : theme.COLORS.GRAY5}
        />

      </IConContainer>

        <InputText
          isFilled={isFilled}
          hasError={hasError}
          isFocused={isFocused}
        >

        </InputText>

    </Container>

  )
}

export {Input}
