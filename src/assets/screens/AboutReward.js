import React from 'react';
import {StatusBar,Text ,Image,View} from 'react-native';
import CommonHeader from '../components/CommonHeader';
import { colors } from '../colors';
import { images } from '../imagesUrls';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../fonts';
import { RFValue, ScreenRatio } from '../utility/screenDimensions';
function AboutReward(props) {
  return (
    <SafeAreaView style = {{flex:1,backgroundColor:colors.CFFFFFF}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <CommonHeader
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="About Rewards"
        onPress1={() => props?.navigation.navigate('BottomBar')}
 />
    </SafeAreaView>
  );
}

export default AboutReward;
