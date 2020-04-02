import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev: number) => prev + 1);

  return (
    <Container>
      <Text>Clicked {count} times</Text>
      <Button onPress={increment}>
        <Text>Increment</Text>
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
  background-color: yellow;
  padding: 10px;
`;

export default Counter;







