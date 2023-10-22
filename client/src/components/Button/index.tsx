import {Pressable, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type btnProps = {
  title: string;
  type?: string;
  onPress: () => void;
  disabled?: boolean;
  width: number;
};

const Button = ({title, type, onPress, disabled, width}: btnProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        type === 'ghost' ? styles.btnGhost : styles.btn,
        {
          width: width,
        },
      ]}>
      <Text style={type === 'ghost' ? styles.btnGhostText : styles.btnText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
