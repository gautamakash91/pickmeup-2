import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Image, Text, View, TextInput } from 'react-native';


export const ImageLogo = styled(Image)`
    width: 60px;
    height: 60px;
`

export const TitleText = styled(Text)`
    color: #ffffff;
    font-size: 55px;
    margin-left: 10px;
`

export const PhoneNumberTextInput = styled(TextInput)`
    padding: 10px;
    width: 150px;
    border-left-color: #D2D2D2;
    border-left-width: 2px;
    border-style: solid;
`

export const BottomText = styled(Text)`
    color: #ffffff;
`

export const GoButton = styled(View)`
    border-color: #ffffff;
    border-radius: 10px;
    border-style: solid;
    border-width: 2;
    padding: 20px;
    padding-top: 13px;
    padding-bottom: 13px;
    color: #ffffff;
`

export const GoButtonText = styled(Text)`
    color: #ffffff;
`

export const SubTitleText = styled(Text)`
    color: #ffffff;
    font-size: 25px;
`

export const SubTitleBody = styled(Text)`
    color: #ffffff;
    font-size: 20px;
`

export const GoogleText = styled(Text)`
    color: #ffffff;
    margin-left: 5px;
`

export const FbText = styled(Text)`
    color: #2f2f2f;
    margin-left: 5px;
`

export const FbImage = styled(Image)`
    width: 20px;
    height: 20px;
`

export const GoogleImage = styled(Image)`
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-right: 10px;
`

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2667C9',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flexDirection: "row",
        marginTop: 100
    },
    goButton: {
        borderColor: "#ffffff"
    },
    phoneNumberContainer: {
        flexDirection: "row",
        marginTop: 50,
    },
    content: {
        marginLeft: 60,
        marginRight: 60
    },
    bottomContainer: {
        flexDirection: "column",
        alignItems: "center"
    },
    socialMediaButton: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        width: Dimensions.get('window').width,
        paddingTop: 30,
        paddingBottom: 30,
    },
    googleButton: {
        borderColor: "#D2D2D2",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        paddingLeft: 20,
        flexDirection: "row",
        marginLeft: 15
    },
    facebookButton: {
        borderColor: "#2667C9",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row"
    },
    areaCodePicker: {
        width: 100,
        color: "#000"
    },
    pickerItem: {
        color: "#000"
    },
    textArea: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        marginRight: 10
    },
    googleBackground: {
        backgroundColor: "#2667C9",
        borderRadius: 10,
        margin: 0,
        padding: 10,
        paddingRight: 20
    }
});