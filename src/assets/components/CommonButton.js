import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../colors';
import { fonts } from '../fonts';
import { ScreenRatio, RFValue } from '../utility/screenDimensions';
function CommonButton(props) {
  return (
    <TouchableOpacity
      disabled={props?.disabled ? true : false}
      onPress={() => props?.onPress()}
      style={[styles.buttonViewCss, props?.buttonViewCss]}
    >
      <Text style={[styles.buttonTxtCss, props?.buttonTxtCss]}>
        {props?.text}
      </Text>
    </TouchableOpacity>
  );
}

export default CommonButton;

const styles = StyleSheet.create({
  buttonViewCss: {
    backgroundColor: colors.CFFA600,
    borderRadius: ScreenRatio(1.5),
    paddingVertical: ScreenRatio(1.25),
  },
  buttonTxtCss: {
    textAlign: 'center',
    color: colors.CFFFFFF,
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(13),
  },
});
