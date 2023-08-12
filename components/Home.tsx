import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import youtube from "../images/youtube.png"
import casting from "../images/casting.png"
import bell from "../images/bell.png"
import user from "../images/user.png"
import search from "../images/search.png"
import { FlatList } from 'react-native-gesture-handler'
const videoData = [
    {
        "id": "1",
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "2",
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "3",
        "title": "For Bigger Blazes",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "4",
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
    {
        "id": "5",
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "6",
        "title": "For Bigger Blazes",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
    {
        "id": "7",
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "8",
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    }
]
interface Iprops{
    navigation?:any;
}
 class Home extends Component<Iprops> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainFlex}>
            <View style={styles.first}>
                <Image source={youtube}/>
                <Text style={styles.youtube}>YouTube</Text>
            </View>
            <View style={styles.first} >
                <Image style={styles.img} source={casting} />
                <Image style={styles.img} source={bell} />
                <Image style={styles.img} source={search} />
                <Image style={{marginTop:8}} source={user} />
           
            </View>
        </View>
       <FlatList 
       data={videoData}
       renderItem={({item}: {item:any})=>(
        <View style={styles.videoCard}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("VideoPlayer",{item})}}>
        <Image style={styles.imagee} source={{uri:`${item.thumbnailUrl}`}}/>
        </TouchableOpacity>
           
            <View style={{display:"flex",flexDirection:"row"}}>
            
                <View style={styles.icon}><Text style={{color:"white"}}>{item.title[0]}</Text></View>
        <View>

     
            <Text style={{color:"black",fontWeight:"bold",marginTop:10,marginLeft:7}}>{item.title}||{item.author}</Text>
            <Text style={{marginLeft:7}}>views:{item.views}||uploadTime:{item.uploadTime}</Text>
            </View>
            </View>

        </View>
      
       )}/>
      </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    youtube:{
        color:"black",
        fontSize:24,
        fontWeight:"bold",
        marginTop:8,
    },
    first:{
        display:"flex",
        flexDirection:"row",

    },
    mainFlex:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    img:{
        marginTop:10,
        marginRight:15,
        
    },
    videoCard:{
        height:300,
        widh:"100%"
    },
    imagee:{
        height:200,
        borderRadius:10,
    },
    icon:{
        height:30,
        width:30,
        backgroundColor:"#3dad7d",
        borderRadius:40,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Home