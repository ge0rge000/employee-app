import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Image,Linking,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Profile=(props)=>{

const{id,name,picture,salary,email,position,phone}=props.route.params.item
return (
    <View style={styles.root}>
       <LinearGradient
                 colors={["#730a6a", "#0e6121"]}
                 style={{ height:"20%" }}
       />
       <View style={{ alignItems:"center" }}>
          <Image 
       style={{ height:140,width:140,borderRadius:140/2,marginTop:-80 }}
       source={{ uri:picture }}
       /> 
       </View>
       <View style={{ alignItems:"center" ,margin:15}}>
           <Title>{name} </Title>
           <Text style={{ fontsize:16}}> Web developer </Text>

       </View>
       <Card style={styles.mycard} onPress={()=>{
           Linking.openURL("mailto:abc@abc.com")
       }}>
           <View style={styles.cardcontainer}>
           <MaterialIcons name="email" size={32} color="black" />
           <Text style={styles.myText}>{email} </Text>
           </View>
       </Card>
       <Card style={styles.mycard} onPress={()=>{
           Linking.openURL("tel:123215")
       }}> 
           <View style={styles.cardcontainer}>
           <Entypo name="phone" size={24} color="black" />
           <Text style={styles.myText}>{phone} </Text>
           </View>
       </Card>
       <Card style={styles.mycard}>
           <View style={styles.cardcontainer}>
           <MaterialIcons name="attach-money" size={24} color="black" />
           <Text style={styles.myText}> {salary} </Text>
           </View>
       </Card>
       <View style={{ flexDirection:"row",justifyContent:"space-around",padding:10 }}>
       <Button icon="account-edit" 
       mode="contained"
        onPress={() => console.log('Pressed')}>
       account-edit
           </Button>
           <Button icon="delete" 
       mode="contained"
        onPress={() => console.log('Pressed')}>
Fire Employee
           </Button>

       </View>
       


    </View>
)
}
const styles=StyleSheet.create({
root:{
    flex:1,
},
mycard:{
 margin:3    
},
cardcontainer:{
    flexDirection:"row",
    padding:8
},
myText:{
    fontSize:18 ,
    marginTop:3,
    marginLeft:5,

}


})

export default Profile;


