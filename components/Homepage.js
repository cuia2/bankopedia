import React, {useState} from 'react';
import { View, StyleSheet, Keyboard,  TouchableWithoutFeedback, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useLinkProps } from '@react-navigation/native';
import savings from '../assets/savings.png';
import Spending from '../assets/Spending.png';
const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);


export default function Homepage({ navigation }) {
  const account_info = [
    savings,
    Spending
  ];
  const color_options = ["lightgrey","black"]
  const [counter, setCount] = useState(0);
  const [not_counter, setnotCount] = useState(1);
  const onPressHandler0 = () => {
     setCount(0);
     setnotCount(1);
  }
  const onPressHandler1 = () => {
    setCount(1);
    setnotCount(0);
  }
  const [real_achievements, set_real_achievements] = useState(0);
  const [achievement_array, setArray] = useState([0,0,0,0,0,0,0,0,0,0]);
  const addAchievement  = (i)  => {
    set_real_achievements(0)
    let temp = achievement_array;
    temp[i] = 1;
    setArray(temp);
    // console.log(achievement_array)
    // console.log(achievement_array.reduce((x, y) => x + y))
  }
  const sumAchievements = () => {
    set_real_achievements(achievement_array.reduce((x, y) => x + y))
  }
  

  
  return (
    <React.Fragment>
    <HideKeyboard>
    <View style = {styles.container}>
      <View style = {styles.goal_view}>
        <View style={{
          width: 190,
          height: 190,
          borderRadius: 190 / 2,
          backgroundColor: '#00D853',
          alignSelf: "center",
          marginTop: "40%",
        }} />
        <View style={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: 180 / 2,
          backgroundColor: '#00C853',
          alignSelf: "center",
          borderBottomWidth: 70,
          marginTop: 171,
        }} />
        <Text style = {{
          color: "lightgrey",
          fontSize: 50,
          alignSelf: "center",
          bottom: 140,
        }}>
          45%
        </Text>
        <Text style = {{
          color: "lightgrey",
          fontStyle: "bold",
          fontSize: 20,
          alignSelf: "center",
          bottom: 50,
        }}>
          $900/$2000 Saved
        </Text>
      </View>
      <View style = {styles.account_view}>
          <View style ={{
              flexDirection: "row",
            }}>
            <Text style ={{
              color: "lightgrey",
              textAlign: "left",
              fontSize: 20,
              left: "10%",
              top: "3%",
              fontStyle: "bold",
              flex: 1,
            }}>Achievements</Text>
            <View style ={{
              top: "4%",
              right: "30%",
              flex: .5,
              height: 5,
              alignSelf: "center",
              width: 20,
              backgroundColor: "#0B8CE9",
              borderRadius: 2.5,
            }}>
            <View style ={{
              top: "4%",
              right: "30%",
              position: "absolute",
              borderColor: "#0B8CE9",
              flex: .5,
              height: 5,
              alignSelf: "center",
              width: (138-(138*(real_achievements/9))),
              right: 0,
              backgroundColor: "#787878",
              borderRadius: 2.5,
            }}></View>
            </View>
          </View>
          <Text style ={{
            color: "lightgrey",
            textAlign: "left",
            fontSize: 15,
            left: "1%",
            top: "8%",
            fontStyle: "italic"
          }}>{real_achievements} Completed</Text>
          <ScrollView horizontal = {true} style = {{
              width: "100%",
              flexDirection: "row",
              top: 25,
              marginLeft: "5%",
              
            }}>
            <TouchableOpacity
             onPress={() => {Alert.alert('Followed Savings Plan for 20 Days'); addAchievement(0); sumAchievements()}}>
              <Image source = {require('../assets/2.png')} style = {{width: 50,height: 50, marginRight: 15,}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Read 30 Articles'); addAchievement(1); sumAchievements()}}>
              <Image source = {require('../assets/3.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Top 2% of Users in App Usage'); addAchievement(2); sumAchievements()}}>
              <Image source = {require('../assets/4.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Payed Bills on Time 3 Months in a Row'); addAchievement(3); sumAchievements()}}>
              <Image source = {require('../assets/5.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Improved Credit Score by 30%'); addAchievement(4); sumAchievements()}}>
              <Image source = {require('../assets/6.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Created Goals for Savings'); addAchievement(5); sumAchievements()}}>
              <Image source = {require('../assets/7.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Ivited 10 Friends'); addAchievement(6); sumAchievements()}}>
              <Image source = {require('../assets/8.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Invited 20 Friends'); addAchievement(7); sumAchievements()}}>
              <Image source = {require('../assets/9.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
            <TouchableOpacity
             onPress={() => {Alert.alert('Conncted Bank Information'); addAchievement(8); sumAchievements()}}>
              <Image source = {require('../assets/10.png')} style = {{width: 50,height: 50, marginRight: 15}}/>
            </TouchableOpacity> 
          </ScrollView>
      </View>
      <View style = {styles.achievement_view}>
          <TouchableOpacity style = {{
            alignSelf: "center",
            }}>
            <Image source = {account_info[counter]} resizeMode = "contain" style = {{width: 400,height: 160, top:"5%"}}/>
          </TouchableOpacity> 
          <View style = {{flexDirection: "row", justifyContent: "space-around",alignItems: "center",}}>
            <Text  onPress={onPressHandler0} style ={{
                color: "lightgrey",
                fontSize: 20,
                top: "5%",
                fontStyle: "bold",
                left: 50,
                flex: 1,
              }}>Savings</Text>
              <Text onPress={onPressHandler1} style ={{
                color: "lightgrey",
                fontSize: 20,
                top: "5%",
                fontStyle: "bold",
                left: 70,
                flex: 1,
              }}>Spending</Text>
          </View>
          <View style = {{flexDirection: "row",}}>
            <View style ={{
                top: "5%",
                left: 43,
                flex: .2,
                height: 5,
                alignSelf: "center",
                backgroundColor: color_options[counter],
                borderRadius: 2.5,
              }}></View>
              <View style ={{
                top: "5%",
                left: 191,
                flex: .22,
                height: 5,
                alignSelf: "center",
                backgroundColor: color_options[not_counter],
                borderRadius: 2.5,
              }}></View>
          </View>

         
          
          
      </View>
      <View style = {styles.nav_bar}>
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
      </View>
      <TouchableOpacity style = {{
          position: "absolute",
          top: 45,
          right: 15,
        }} onPress={() => navigation.navigate("Friends_page")}>
            <Image source = {{
              uri: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png",
              height: 50,
              width: 50,
              }}/> 
      </TouchableOpacity> 
    </View>
      
    </HideKeyboard>
    </React.Fragment>
  );
}


  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
      },
      goal_view: {
        flex: 2,
        backgroundColor: "#1E1E1E",
      },
      account_view: {
        flex: .6,
        backgroundColor: "#1E1E1E",
      },
      achievement_view: {
        flex: 1,
        backgroundColor: "#1E1E1E",
      },
      nav_bar: {
        flex: .4,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        alignItems: "center",
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
  
