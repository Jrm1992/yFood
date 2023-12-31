import { ReactElement, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type ButtonProps = {
  children: JSX.Element
}

export default function Button( { children } : ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
});