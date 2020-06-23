import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    grid:{
        flexDirection:'column'
    },
    profileImage: {
        width: width / 3,
        height: width / 3,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    listBeneficiaries:{
        width: width / 1,
        justifyContent: 'center'
      },
    frmHealth:{
        marginTop:20,
        width: width / 1.1,
        justifyContent: 'center',
        marginLeft:5
    },
    saveBtn: {
        marginTop: 10,
        width: width / 1.5,
        height: height/13,
        alignSelf:'center',
        justifyContent: 'center'
      },
    Btn: {
        padding: 10,
        marginTop:10,
    }
});