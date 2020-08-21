import React, { useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { CounterContext } from '../context';

const CounterScreen = () => {
  const counter = useContext(CounterContext);

  return (
    <Container>
      <ClickedText>Clicked {counter.count} times</ClickedText>
      <Button onPress={counter.increase}>
        <Text>Increment</Text>
      </Button>
      <Button onPress={counter.decrease}>
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
