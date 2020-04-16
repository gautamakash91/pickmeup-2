import React, { useState } from 'react';
import { Picker, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles";
import {
  ImageLogo, 
  PhoneNumberTextInput, 
  BottomText, 
  GoButton, 
  GoButtonText, 
  SubTitleText, 
  SubTitleBody, 
  FbText, 
  GoogleText,
  GoogleImage,
  FbImage,
  TitleText
} from "./styles";

export default function Login() {
  const [areaCodeValue, setAreaCodeValue] = useState("+1");
  return (
    <View style={styles.container}>
      {/* IMAGE AND TITLE */}
      <View style={styles.titleContainer}>
        <ImageLogo
          source={require('./images/logo.png')}
        />
        <TitleText>
          Pickmeup
        </TitleText>
      </View>

      {/* CONTENT PART */}
      <View style={styles.content}>
        <SubTitleText>
          Hey there!
        </SubTitleText>
        <SubTitleBody>
          Type in your phone number to get started
        </SubTitleBody>
        <View style={styles.phoneNumberContainer}>
          <View style={styles.textArea}>
            <Picker
              selectedValue={areaCodeValue}
              style={styles.areaCodePicker}
              onValueChange={(itemValue, itemIndex) => setAreaCodeValue(itemValue)}
            >
              <Picker.Item style={styles.pickerItem} label="+1" value="+1" />
              <Picker.Item label="+91" value="+91" />
            </Picker>
            <PhoneNumberTextInput />
          </View>
          <TouchableOpacity>
            <GoButton>
              <GoButtonText>G0</GoButtonText>
            </GoButton>
          </TouchableOpacity>
        </View>
      </View>

      {/* BOTTOM CONTAINER */}
      <View style={styles.bottomContainer}>
        <BottomText>
          or you can sign in with
        </BottomText>
        <View style={styles.socialMediaButton}>
          <TouchableOpacity>
            <View style={styles.facebookButton}>
              <FbImage source={require('./images/fb.png')} />
              <FbText>Facebook</FbText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.googleButton}>
              <GoogleImage source={require('./images/google.png')} />
              <View style={styles.googleBackground}>
                <GoogleText>Google</GoogleText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}


