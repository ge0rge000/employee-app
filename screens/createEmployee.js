import React,{useState} from 'react';
import { StyleSheet, Text,View,Image,FlatList,Modal ,Alert} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateEmployee=()=>{
    //////داله الرفع
const handleUpload=(image)=>{
    /////function that bring from mobile
    const data=new FormData()
    data.append('file',image)
    data.append('upload_preset','employeeApp')
    data.append("cloud_name","dw0h80t1h")
////////////then up to website
    fetch("https://api.cloudinary.com/v1_1/dw0h80t1h/image/upload",{
        method:"post",
        body:data
    }).then(res=>res.json())
    ///////show in the console 
    .then(data=>{
        setPicture(data.uri)
        setModal(false)
    })
}

///Function used to access for Gallery 
const pickFromGallery=async()=>{
    const {granted}= await Permissions.askAsync(Permissions.CAMERA_ROLL)
    ///داله التى تاخذ الاشياء من الهاتف 
    if(granted){
        let data= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        ////داله التى ترفع البيانات على موقع 
        if(!data.cancelled){
            let newfile={
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`
            }
            handleUpload(newfile)    
        }

    }else{
        Alert.alert("you need to give permission")
    }
}
///Function used to access for Camera 

const pickFromCamera=async()=>{
    ///داله التى تاخذ الاشياء من الهاتف 

    const {granted}= await Permissions.askAsync(Permissions.CAMERA  )
    if(granted){
        let data= await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5 
        })  
                ////داله التى ترفع البيانات على موقع 

        if(!data.cancelled){
            let newfile={
                uri:data.uri,
                type:'test/${data.uri.split(".")[1]}',
                name:'test.${data.uri.split(".")[1]}'
            }
            handleUpload(newfile)    
        }

    }else{
        Alert.alert("you need to give permission")
    }
}

    
   const [Name,SetName]=useState("")
const [phone,SetPhone]=useState("")
const [email,SetEmail]=useState("")
const [salary,SetSalary]=useState("")
const [picture,setPicture]=useState("")
const [modal,setModal]=useState(false)
    return(
        <View style={styles.root}>
            <TextInput
            label='Name'

            value={Name}
            mode="outlined"

            onChangeText={text => SetName(text)}
            
        />
        <TextInput
            label='Email'
            value={email}
            mode="outlined"
            onChangeText={text => SetEmail(text)}
        />
        <TextInput
            label='Phone'
            value={phone}
            keyboardType="number-pad" 
            mode="outlined"
            onChangeText={text => SetPhone(text)}
        />
        <TextInput
            label='salary'
            value={salary}
            keyboardType="number-pad" 
            mode="outlined"
            onChangeText={text => SetSalary(text)}
        />
        <View style={styles.modalbuttonzero} >
             <Button 
         icon={picture==""?"upload":"check-bold"}
          mode="contained"
         onPress={() => setModal(true)}>
                           upload
                        </Button>
                        <Button 
                                  mode="contained"
                                  icon="content-save" onPress={() => console.log("save")}>
                            save
                        </Button>
        </View>
        
                          <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modal}
                                 onRequestClose={() => {
                                     setModal(false)
                                 }}
                                 >
                                 
                              <View style={styles.modalview}>
                                  <View style={styles.modalbutton}>  
                                  <Button   icon="camera"   mode="contained" onPress={() => pickFromCamera()}>
                            camera
                                    </Button>
                                    <Button icon="file-cabinet" mode="contained" onPress={() => pickFromGallery()}>
                            gallery
                                    </Button>
                                    
                                </View>
                             <Button  icon="content-save" onPress={() => setModal(false)}>
                            cancel
                        </Button>
                              </View>


                          </Modal>

        </View>
    )


}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    modalview:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"#1d0930"
    

    },
    modalbutton:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,

    },
    modalbuttonzero:{
        flexDirection:"column",
        justifyContent:"space-around",
        padding:15,
    }
})

export default CreateEmployee
