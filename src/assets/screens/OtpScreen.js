import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../components/CommonHeader';
import CommonButton from '../components/CommonButton';
import { images } from '../imagesUrls';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { ScreenRatio, RFValue } from '../utility/screenDimensions';
import { useNavigationState } from '@react-navigation/native';
function OtpScreen(props) {
  const [timer, setTimer] = useState(5);

   const previousRouteName = useNavigationState(state => {

    if (state.index > 0) {
      return state.routes[state.index - 1].name;
    }
    return 'No previous screen'; 
  });

 // console.log("fropm otpScreen ",typeof(previousRouteName))
  

  useEffect(() => {
    const clearTimer = setInterval(() => {
      if (timer === 0) {
        return clearInterval(clearTimer);
      }
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(clearTimer);
  }, [timer]);
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
        title="Verification"
        isRightImage={false}
        onPress1={() => props?.navigation.navigate('Login')}
      />
      <View style={{ marginHorizontal: ScreenRatio(2) }}>
        <Text
          style={{
            fontFamily: fonts.jakarta_semibold,
            fontSize: RFValue(14),
            color: colors.C000000,
            marginVertical: ScreenRatio(2),
          }}
        >
          Verify Mobile Number
        </Text>
        <Text
          style={{
            fontFamily: fonts.jakarta_medium,
            fontSize: RFValue(12),
            color: colors.C000000,
          }}
        >
          Enter OTP sent on 8619290606
        </Text>
        <View style={styles.inputViewCss}>
          <TextInput
            placeholder="OTP"
            style={styles.inputTxtCss}
            placeholderTextColor={colors.C607080}
            keyboardType="numeric"
          />
          {timer === 0 ? (
            <TouchableOpacity onPress={() => setTimer(5)}>
              <Text style={styles.inputTxtCss}>Resend-Otp</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.inputTxtCss}>00:{timer}</Text>
          )}
        </View>
        <CommonButton
        text = {previousRouteName === "Login" ? "Login" : "Proceed"}
        onPress = {()=>props?.navigation.navigate("BottomBar")}
        />
      </View>
    </SafeAreaView>
  );
}

export default OtpScreen;

const styles = StyleSheet.create({
  inputViewCss: {
    paddingHorizontal: ScreenRatio(2),
    borderWidth: 0.7,
    borderColor: colors.C266141,
    borderRadius: ScreenRatio(3),
    backgroundColor: colors.CFFFFFF,
    marginVertical: ScreenRatio(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputTxtCss: {
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(13),
    color: colors.C266141,
  },
});
