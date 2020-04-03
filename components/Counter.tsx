import React, { Dispatch } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import {
  CounterActionT,
  increase as increaseAction,
  decrease as decreaseAction,
  reset as resetAction
} from "../store/actionCreators/counter";
import { StoreT } from "../store/reducer";

const Counter = () => {
  const dispatch = useDispatch<Dispatch<CounterActionT>>();

  const increase = () => dispatch(increaseAction());
  const decrease = () => dispatch(decreaseAction());
  const reset = () => dispatch(resetAction());

  const count = useSelector<StoreT, number>(state => state.count);

  return (
    <Container>
      <ClickedText>Clicked {count} times</ClickedText>
      <Button onPress={increase}>
        <Text>Increment</Text>
      </Button>
      <Button onPress={decrease}>
        <Text>Decrement</Text>
      </Button>
      <Button onPress={reset}>
        <Text>Reset</Text>
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

export default Counter;
