import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Video from 'react-native-video';
interface Iprops{
  route:any;
}
class VideoPlayer extends Component <Iprops>{
  render() {
    const data = this.props.route.params.item 
    console.log("dat",data)
    return (
      <View style={styles.con}>
     <Video source={{
          uri:
           `${data.videoUrl}`
        }}
        resizeMode='cover'
        controls={true}
        style={styles.mediaPlayer}
        volume={100}/>
        <View style={{display:"flex",flexDirection:"row",marginTop:260,marginLeft:10}}>
            
            <View style={styles.icon}><Text style={{color:"white"}}>{data.title[0]}</Text></View>
    <View>

 
        <Text style={{color:"black",fontWeight:"bold",marginTop:10,marginLeft:7,fontSize:20,width:"80%"}}>{data.title}||{data.author}</Text>
        <Text style={{marginLeft:7}}>views:{data.views}||uploadTime:{data.uploadTime}</Text>
        </View>
        </View>
      <View style={{padding:15}}>

     
        <Text>description</Text>
        <Text>{data.description}</Text>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    height:250,
    width:"100%"

  },
  icon:{
    height:45,
    width:45,
    backgroundColor:"#3dad7d",
    borderRadius:40,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    
},
con:{
  flex:1,

}
})
export default VideoPlayer