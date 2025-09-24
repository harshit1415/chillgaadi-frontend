import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';

import { images } from '../imagesUrls';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { RFValue, ScreenRatio } from '../utility/screenDimensions';

function SignInScreen(props) {
  const [checkToggle, isCheckToggle] = useState(false);
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
        title="SignIn"
        isRightImage={false}
        onPress1={() => props?.navigation.navigate('Welcome')}
      />
      <View style={{ marginHorizontal: ScreenRatio(2) }}>
        <Text
          style={{
            fontFamily: fonts.jakarta_semibold,
            fontSize: RFValue(14),
            color: colors.C000000,
            paddingTop: ScreenRatio(2),
          }}
        >
          To join us , Please provide your Mobile number
        </Text>

        <TextInput
          placeholder="Mobile no."
          style={styles.inputViewCss}
          placeholderTextColor={colors.C607080}
          keyboardType='numeric'
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => isCheckToggle(!checkToggle)}>
            <Image
              source={checkToggle ? images.checkmark_box : images.check_box}
              style={styles.checkBoxCss}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Text style={styles.rememeberTxtCss}>I Agree to the Company</Text>
            <TouchableOpacity style={styles.borderCss}>
              <Text style={styles.rememeberTxtCss}> Terms & Conditions </Text>
            </TouchableOpacity>
            <Text style={styles.rememeberTxtCss}>and</Text>
            <TouchableOpacity style={styles.borderCss}>
              <Text style={styles.rememeberTxtCss}> Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <CommonButton
          text="Proceed"
          buttonViewCss={{ marginVertical: ScreenRatio(2) }}
          onPress = {()=>props?.navigation.navigate("VerifyOtp")}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: fonts.nunito_regular,
              fontSize: RFValue(13),
              color: colors.C000000,
            }}
          >
            Already a member ?
          </Text>
          <TouchableOpacity
            onPress={() => props?.navigation.navigate('Login')}
            style={{ marginLeft: 5 }}
          >
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: fonts.nunito_semibold,
                color: colors.C266141,
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignInScreen;

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
    marginVertical: ScreenRatio(3),
    // paddingVertical: ScreenRatio(1.25),
  },
  checkBoxCss: {
    height: ScreenRatio(2.5),
    width: ScreenRatio(2.5),
    resizeMode: 'contain',
    marginRight: ScreenRatio(1.3),
  },
  rememeberTxtCss: {
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(10),
    color: colors.C607080,
  },
  borderCss: {
    borderBottomWidth: 1,
    borderBottomColor: colors.C848484,
  },
});
