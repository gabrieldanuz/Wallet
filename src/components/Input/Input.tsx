import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  useRef,
  useEffect
} from "react";
import {Text} from "react-native";

import {Container, IConContainer, InputText } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <Text>Input</Text>
    </Container>

  )
}

export {Input}
