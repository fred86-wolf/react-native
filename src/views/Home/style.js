import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
const { width,height } = Dimensions.get('window');

export default StyleSheet.create({
    containerOne:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    containerTwo:{
        flex:2,
        justifyContent:'center',
        marginTop:4
    },
    containerThree:{
        flex: 2,
        justifyContent:'center',
        marginTop:10,
        backgroundColor:'#CFD8DC'
    },
    containerFourth:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    mainCard:{
        height: height/5
    },
    cardMain:{
        backgroundColor: '#70DB7F', 
        flex:2, 
        justifyContent:'center'
    },
    cardInside:{
        flexDirection:'column', 
        justifyContent:'center',
        backgroundColor: '#70DB7F'
    },
    carouselHomeHeight:{
        height:height/6,
        marginTop:10
    },
    carouselHome:{
        height:height/5, 
        width:width/3,
        borderColor:'#808080',
        borderWidth:0.5, 
        borderRadius:10, 
        marginRight:5, 
        justifyContent:'center',
        marginTop:10
    },
    carouselHomeInside:{
        flex:2
    },
    carouselImage:{
        flex:1, 
        width:null, 
        height: null, 
        resizeMode:'cover', 
        borderRadius:10
    },
    carouselText:{
        flex:1,
        borderColor:'#808080', 
        borderWidth:0.5, 
        borderBottomLeftRadius:10, 
        borderBottomRightRadius:10
    },
    carouselTextInside:{
        alignSelf:'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '400'
    },
    subtitle: {
        fontSize: 20,
        fontWeight:'200'
    },
    dateCard:{
        height:height/7,
        backgroundColor: '#CFD8DC',
        justifyContent: 'center',
        marginTop:20
    },
    textCenter:{
        textAlign: 'center'
    },
    lineCard:{
        marginVertical:height/18,
        backgroundColor:'#E5E5E8',
        width:width/50,
        height:height/12,
        borderRadius: 10
    },
    mlIcon:{
        color:'#ffff00',
        fontSize: height/6
    },
    scheduleIconText:{
        marginStart:-30,
        marginBottom: 5,
        textAlign:'left'
    },
    scheduleIconOne:{
        marginTop:5,
        marginStart:20
    },
    scheduleIconTwo:{
        marginTop: 10,
        marginStart:20,
        marginBottom: 5
    },
    mrIcon:{
        color:'#444444',
        fontSize: height/6
    },
    calendarDayIcon:{
        marginTop:10,
        marginStart:10
    },
    grayCard:{
        backgroundColor:'#E5E5E8',
        borderRadius: 10
    },
    seeBtn:{
        width: width / 1.5,
        justifyContent: 'center',
        marginTop:20
    }
});