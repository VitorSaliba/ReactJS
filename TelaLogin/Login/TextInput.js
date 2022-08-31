import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="username@email.com"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#b4bdc2'
  },
});