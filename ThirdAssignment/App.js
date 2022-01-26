import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text,View,h1 } from 'react-native';
import Button from './button';
export default function App() {
  const [ScoreTeamA, setScoreTeamA] = useState(0);
  const [ScoreTeamB, setScoreTeamB] = useState(0);
  
  let  ThreePointerA= () => {
    setScoreTeamA(ScoreTeamA + 3 );
  };
  let  TwoPointerA= () => {
    setScoreTeamA(ScoreTeamA + 2);
  };
  let  OnePOinterA= () => {
    setScoreTeamA(ScoreTeamA + 1);
  };
   let  ThreePointerB= () => {
    setScoreTeamB(ScoreTeamB + 3 );
  };
  let  TwoPointerB= () => {
    setScoreTeamB(ScoreTeamB + 2);
  };
  let  OnePOinterB= () => {
    setScoreTeamB(ScoreTeamB + 1);
  };
  let  RESET= () => {
    setScoreTeamA(ScoreTeamA - ScoreTeamA);
    setScoreTeamB(ScoreTeamB - ScoreTeamB);
    

  };
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',padding:10,textAlign:'center'}}>Court Counter</Text>
     <View style={{display:'flex' , flexDirection:'row' ,flex:0.8}}>
      <View style={{width:'50%', padding:10,textAlign:'center'  }}>
      <Text style={{color:'gray'}}>TEAM A</Text>

      <h1 style={{color:'gray',fontSize:15}}>{ScoreTeamA}</h1>
     
      <Button  title={"+3 POINTS"} action={ThreePointerA} />
      <Button  title={"+2 POINTS"} action={TwoPointerA} />
      <Button  title={"FREE THROW"} action={OnePOinterA} />
     
      </View>
      <View style={{width:'50%', padding:10,textAlign:'center' }}>
      <Text style={{color:'gray'}}>TEAM B</Text>
      <h1 style={{color:'gray', fontSize:15}}>{ScoreTeamB}</h1>
     
      <Button  title={"+3 POINTS"} action={ThreePointerB} />
      <Button  title={"+2 POINTS"} action={TwoPointerB} />
      <Button  title={"FREE THROW"} action={OnePOinterB} />
     
      </View>
       
     </View>
     <View style={{ alignItems:'center'}}>
       <Button title={"RESET"} action={RESET} />
     </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000',
    justifyContent:'center'
  },

});
