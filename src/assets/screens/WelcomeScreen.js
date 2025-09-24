import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { images } from '../imagesUrls';
import { colors } from '../colors';
import { fonts } from '../fonts';
import {
  DHeightPercent,
  DWidth,
  DWidthPercent,
  RFValue,
  ScreenRatio,
} from '../utility/screenDimensions';
import CommonButton from '../components/CommonButton';

function WelcomeScreen(props) {
  return (
    <SafeAreaView>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <Image
        style={{
          height: DHeightPercent(70),
          width: DWidthPercent(100),
          resizeMode: 'cover',
        }}
        source={images.f3_img}
      />
      <View style={{ paddingHorizontal: ScreenRatio(2) }}>
        <CommonButton
          text="JOIN US"
          buttonViewCss={{
            borderRadius: ScreenRatio(4),
            marginVertical: ScreenRatio(2),
            backgroundColor: colors.CFFA600,
          }}
        onPress = {()=>props?.navigation.navigate("SignIn")}

        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: ScreenRatio(2),
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
        <Text style={[styles.txtCss ,{ marginTop: ScreenRatio(3),textAlign:"center" }]}>
          By proceeding, I agree to company
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <Text style = {[styles.txtCss , styles.borderCss]}>Privacy Policy </Text>
          </TouchableOpacity>
          <Text style = {styles.txtCss}>and</Text>
          <TouchableOpacity>
            <Text style = {[styles.txtCss , styles.borderCss]}> Terms of Service</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  txtCss: {
      fontFamily: fonts.nunito_regular,
    fontSize: RFValue(10),
    color: colors.C607080,
  },
  borderCss : {
    borderBottomWidth : 1 , borderBottomColor : colors.C848484
  }
});
