import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { ScreenRatio, RFValue } from '../utility/screenDimensions';
import { colors } from '../colors';
import { fonts } from '../fonts';
function CommonHeader(props) {
  return (
    <View style={[styles.headerViewCss, props.headerViewCss]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {props?.isLeftImage && (
          <TouchableOpacity onPress={() => props?.onPress1()}>
            <Image source={props?.left_arrow_img} style={styles.leftArrowCss} />
          </TouchableOpacity>
        )}
        {props?.isTitle && (
          <Text style={[styles.titleTxtCss]}>{props?.title}</Text>
        )}
      </View>
      {props?.isRightImage && (
        <TouchableOpacity onPress={() => props?.onPress2()}>
          <Image source={props?.right_img} style={styles.leftArrowCss} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default CommonHeader;

const styles = StyleSheet.create({
  headerViewCss: {
    paddingHorizontal: ScreenRatio(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftArrowCss: {
    height: ScreenRatio(3),
    width: ScreenRatio(3),
    resizeMode: 'contain',
    marginRight: ScreenRatio(2),
  },
  titleTxtCss: {
    color: colors.C132235,
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(14),
  },
});
