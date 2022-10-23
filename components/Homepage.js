import React, {useState} from 'react';
import { View, StyleSheet, Keyboard,  TouchableWithoutFeedback, Text, Image, TouchableOpacity, ScrollView, Alert,} from 'react-native';
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
  const [number, onChangeNumber] = useState(0);
  const [savings_diff, change_savings_diff] = useState(0);
  const [color_index, change_color_index] = useState(0);
  const color_array = ["#0B8CE9","red"]
  const changeNumber1 = () => {
      change_savings_diff(Math.abs(number))
      change_color_index(0)
  }
  const changeNumber2 = () => {
      change_savings_diff(-1 * Math.abs(number))
      change_color_index(1)
  }
  const [total_savings, change_total_savings] = useState(0);
  return (
    <React.Fragment>
    <HideKeyboard>
    <View style = {styles.container}>
      <View style = {styles.goal_view}>
        <View style = {{ flexDirection: "row", flex: 2
          }}>
            <View style = {{
              flexDirection: "column",
              flex: 2,
            }}>
              <View style={{
                width: 190,
                height: 190,
                borderRadius: 190 / 2,
                backgroundColor: 'black',
                alignSelf: "center",
                marginTop: 166,
              }} />
              <View style={{
                position: "absolute",
                width: 180,
                height: 180,
                borderRadius: 180 / 2,
                backgroundColor: 'darkgrey',
                borderColor: "#0B8CE9",
                alignSelf: "center",
                borderBottomWidth: ((total_savings/2000)* 180),
                marginTop: 171,
              }} />
              <Text style = {{
                color: "black",
                fontSize: 40,
                alignSelf: "center",
                borderColor: "black",
                borderRadius: 10,
                bottom: 120,
              }}>
                {Math.round(((total_savings)/2000)*100) + "%"}
              </Text>
              <Text style = {{
                color: "lightgrey",
                fontStyle: "bold",
                fontSize: 20,
                alignSelf: "center",
                bottom: 40,
              }}>
                ${total_savings}/$2000 Saved
              </Text>
            </View>
            {/* <View style = {{
              flexDirection: 'column',
              right: 40,
              flex: .2,
              width: "100%"
            }}>
             
            </View> */}
            <View style = {{
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}>
                <View style={{
                      top: 200,
                      padding: 2,
                      flex: 1,
                    }}>
                  <TextInput style = {{
                    height: 90,
                    width: 200,
                    paddingRight: 60,
                  }}
                    onChangeText = {onChangeNumber}
                    value={number}
                    placeholder="Amount Saved"
                    keyboardType="numeric"
                  />
                </View>
                <View style = {{
                    flex: 2,
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                    top: 175,
                    right: 30,
                }}>
                  <View style = {{
                    flex: 1,
                    height: 20,
                    justifyContent: "center",
                  }}>
                  <Button color = "#2D2D2D" title = "(+)" onPress={() => changeNumber1(Math.abs(number))} />
                </View>
                  <View style = {{
                      flex: 1,
                      height: 20,
                      justifyContent: "center",
                  }}>
                    <Button color = "#2D2D2D" title = "(-)" onPress={() => changeNumber2(-1*Math.abs(number))}/>
                  </View>
                </View>
              
              <View style = {{
                  flex: 1,
                  height: 20,
                  width: 125,
                  alignSelf: "flex-start",
                  justifyContent: "flex-start",
                  right: 25,
                  fontSize: 10,
              }}>
                <Button color = {color_array[color_index]} title = "Calculate" onPress={() => change_total_savings(Number(total_savings) + Number(savings_diff))}/>
              </View>
            </View>
        </View>
        
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
          <View style = {{
            marginRight: "5%",
          }}>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator= {false} style = {{
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
                <Button color = "#2D2D2D" title={"Discover"} onPress={() => navigation.navigate("Discover_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button color = "#2D2D2D" title={"News"} onPress={() => navigation.navigate("News_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button color = "#2D2D2D" title={"Calendar"} onPress={() => navigation.navigate("Calendar_page")}/>
            </View>
        </View>
      </View>
      <TouchableOpacity style = {{
          position: "absolute",
          top: 55,
          right: 17,
        }} onPress={() => navigation.navigate("Account_page")}>
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
        backgroundColor: "#1E1E1E",
      },
      goal_view: {
        flex: 2,
        backgroundColor: "#1E1E1E",
      },
      account_view: {
        flex: .6,
        backgroundColor: "#2D2D2D",
        borderRadius: 10,
        borderColor: "#1E1E1E",
        margin: 8
      },
      achievement_view: {
        flex: 1,
        backgroundColor: "#1E1E1E",
      },
      nav_bar: {
        flex: .35,
        backgroundColor: "black",
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
  
