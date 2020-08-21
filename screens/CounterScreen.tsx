import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Action, Dispatch } from "@reduxjs/toolkit";
import styled from "styled-components/native";

import {
  increase as increaseAction,
  decrease as decreaseAction,
  counterSelector,
} from "../store/slices/counter";
import { RootStateT } from "../store/slices";

const CounterScreen = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const increase = () => dispatch(increaseAction());
  const decrease = () => dispatch(decreaseAction());

  const count = useSelector<RootStateT, number>(counterSelector);

  return (
    <Container>
      <ClickedText>Clicked {count} times</ClickedText>
      <Button onPress={increase}>
        <Text>Increment</Text>
      </Button>
      <Button onPress={decrease}>
        <Text>Decrement</Text>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #74e685;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ClickedText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default CounterScreen;
