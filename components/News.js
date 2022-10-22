import React, {useState} from 'react';
import { View, StyleSheet, Keyboard,  TouchableWithoutFeedback, Text, Image } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useLinkProps } from '@react-navigation/native';

const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);


export default function News({ navigation }) {
    const values = ["Bank Balance", "Credit Score"];
    const account_info = [
        'https://realtybiznews.com/wp-content/uploads/2018/11/Credit-Score-Meter.png',
        'https://cdn.gobankingrates.com/wp-content/uploads/Mint-budget-spending1.png'

    ];
    const [counter, setCount] = useState(0);
    const onPressHandler = () => {
        if (counter == 0) setCount(counter + 1);
        if (counter == 1) setCount(0);
    }
  return (
    <React.Fragment>
    <HideKeyboard>
    <View style={styles.container}>
        <Text style={styles.titleText}>{'HOMEPAGE'}</Text>
        <Image
            source = {{
                width: 200,
                height: 200,
                uri: account_info[counter],
            }}
        />
        <Button  title={values[counter]} color="#002100" onPress={onPressHandler}/>
        <Text style={{marginTop: "7.5%"}}>Go Back to Login Page?<Text>{' '}</Text>
          <Text style={{color: 'blue'}}
                onPress={() => navigation.navigate("Login")}>
          Go Back
          </Text>
        </Text>
        <View style = {styles.button3}>
            <View style = {styles.button_style}>
                <Button  title={"Discover"} color="#005100" onPress={() => navigation.navigate("Discover_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button  title={"News"} color="#005100" onPress={() => navigation.navigate("News_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button  title={"Calendar"} color="#005100" onPress={() => navigation.navigate("Calendar_page")}/>
            </View>
        </View>
        <View>
          <Button  title={"Account"} color="#005100" onPress={onPressHandler}/>
        </View>
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
      justifyContent: 'space-evenly',
    },
    
    input: {
    //   width: "100%",
    //   marginBottom: "10%",
    //   marginTop: "40%",
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
    },
    button3: {
        fontSize: 10,
        flexDirection: "row",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        height: 30,
        width: 200,
    },
    button_style: {
        margin: 10,
    }
  });
  
