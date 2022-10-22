import React from 'react';
import { View, StyleSheet, Keyboard,  TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";

const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);

  
export default function LoginForm({ navigation }) {
  return (
    <React.Fragment>
    <HideKeyboard>
    <View style={styles.container}>
        <TextInput label="Email" style={styles.input} color="#002100" />
        <TextInput label="Password" style={styles.input} color="#002100" />
        <Button variant="outlined" title="Login" color="#002100" />
        <Text style={{marginTop: "7.5%"}}>Don't have an account?<Text>{' '}</Text>
          <Text style={{color: 'blue'}}
                onPress={() => navigation.navigate("Register")}>
          Register
          </Text>
        </Text>
      </View>
    </HideKeyboard>
    </React.Fragment>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      width: "75%",
      marginBottom: "10%",
    }
  });
  
