import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';

import { images } from '../imagesUrls';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { RFValue, ScreenRatio } from '../utility/screenDimensions';

function LoginScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.CFFFFFF }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <CommonHeader
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="Login"
        isRightImage={false}
        onPress1 = {()=>props?.navigation.navigate("Welcome")}

      />
      <View style={{ paddingHorizontal: ScreenRatio(2) }}>
        <Text
          style={{
            fontFamily: fonts.jakarta_semibold,
            fontSize: RFValue(14),
            color: colors.C000000,
            paddingTop: ScreenRatio(2),
          }}
        >
          Please Enter your Mobile Number to login into your account
        </Text>

        <TextInput
          placeholder="Mobile no."
          style={styles.inputViewCss}
          placeholderTextColor={colors.C607080}
          keyboardType='numeric'
        />

         <CommonButton
           text = "Proceed"
          onPress = {()=>props?.navigation.navigate("VerifyOtp")}

           />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: ScreenRatio(2),
          
          }}
        >
          <Text style = {{  fontFamily: fonts.nunito_regular,
            fontSize: RFValue(13),
            color: colors.C000000,}}>Not a member Yet?</Text>
          <TouchableOpacity 
          onPress={()=>props?.navigation.navigate("SignIn")}
          style = {{marginLeft:5}}>
            <Text style = {{ fontSize: RFValue(13) ,fontFamily:fonts.nunito_semibold , color : colors.C266141}}>register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  inputViewCss: {
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(13),
    color: colors.C266141,
    paddingLeft: ScreenRatio(2),
    borderWidth: 0.7,
    borderColor: colors.C266141,
    borderRadius: ScreenRatio(3),
    backgroundColor: colors.CFFFFFF,
    marginVertical: ScreenRatio(3)
    // paddingVertical: ScreenRatio(1.25),
  },
});
