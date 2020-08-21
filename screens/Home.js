import React from 'react';
import { StyleSheet, Text,View,Image,FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper'

const Home=({ navigation })=> {
    const data = [   //static
        {id:"1",name:"george",email:"abc@abc.com",phone:"123",position:"web developer",picture:"https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
        {id:"2",name:"samy",email:"samy@abc.com",phone:"365",position:"andrio developer"},
        {id:"3",name:"ibrahiem",email:"ibrahiem@abc.com",phone:"369",position:"arduino developer"},
        

    ]
    const renderList=((item)=>{
            return(
                
                <Card style={styles.mycard} 
                
                onPress={()=>navigation.navigate("Profile",{item})}
                >
                <View style={styles.cardview}>
                   <Image 
                style={{ width:100,height:100,borderRadius:50 }}
                source={{ uri:"https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" }}
                />
                <View style={{ marginLeft:10 }}>

                      <Text style={styles.text}>  {item.name} </Text> 
                <Text > {item.position} </Text>
                </View>
               
    
                </View>
                
    
                </Card>
            
            )
        }
    )
    return(
       
        <View style={{ flex:1 }}>
            <FlatList
                 data={data}
                 renderItem={({item})=>{
                return renderList(item)
            }}
                keyExtractor={item=>item.id}     
            />  
             <FAB onPress={()=>navigation.navigate("create")}
                    style={styles.fab}
                    small
                    icon="plus"
                 />
      
        </View>
        
    )
}
const styles = StyleSheet.create({
    mycard: {
     margin:5,
    },
    cardview:{
        flexDirection:"row",
        padding:6,

    },
    text:{
        fontSize:20,



    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
  });
  
export{Home};