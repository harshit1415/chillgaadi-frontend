import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors';
import CommonHeader from '../components/CommonHeader';
import { images } from '../imagesUrls';
import { fonts } from '../fonts';
import {
  RFValue,
  ScreenRatio,
  DWidthPercent,
  DHeightPercent,
} from '../utility/screenDimensions';
import CommonButton from '../components/CommonButton';

function RestaurantInfo(props) {
  const timings = [
    {
      day:'Monday',
      time:'11:00 am - 11:00 pm',
    },
    { day:'Tuesday', time:  '11:00 am - 11:00 pm' },
    { day:'Wednesday',time: '11:00 am - 11:00 pm' },
    { day:'Thursday',time:   '11:00 am - 11:00 pm' },
    { day:'Friday', time:     '11:00 am - 11:00 pm' },
    { day:'Saturday', time:  '11:00 am - 11:00 pm' },
    { day:'Sunday', time:  '11:00 am - 11:00 pm' },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Ceff7f6 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <CommonHeader
        headerViewCss={{
          paddingBottom: ScreenRatio(2),
        }}
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="Restaurant Info"
        onPress1={() => props?.navigation.navigate("BottomBar", {
  screen: "Profile",
})}
      />
      <Image
        source={images.cheel_img}
        style={{
          height: ScreenRatio(30),
          width: '100%',
          resizeMode: 'cover',
          marginBottom: ScreenRatio(1),
        }}
      />
      <View></View>
      <Text
        style={{
          fontFamily: fonts.poppins_semibold,
          fontSize: RFValue(15),
          color: colors.C000000,
          marginHorizontal: ScreenRatio(2),
        }}
      >
        CheelGaadi Veg Restaurant
      </Text>
      <Text style={styles.textCss}>
        Airport Road, Near Arvind Shri Vidya Mandir, Sanganer, Jaipur 302001
        India
      </Text>
      <CommonButton
        text="Call"
        buttonViewCss={{
          width: DWidthPercent(25),
          margin: ScreenRatio(2),
          backgroundColor: colors.C266141,
        }}
      />

      <View
        style={{
          borderTopColor: colors.C266141,
          borderTopWidth: 1,
          marginTop: ScreenRatio(1),
          paddingHorizontal: ScreenRatio(2),
          paddingVertical: ScreenRatio(2),
        }}
      >
        <Text
          style={{
            fontFamily: fonts.nunito_Bold,
            fontSize: RFValue(15),
            color: colors.C000000,
          }}
        >
          CheelGaadi Timings
        </Text>
        <FlatList
          data={timings}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: "space-between",
                  marginTop: ScreenRatio(1),
                }}
              >
                <Text
                  style={[styles.textCss, { fontFamily: fonts.jakarta_medium }]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[styles.textCss, { fontFamily: fonts.jakarta_medium }]}
                >
               {item.time}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default RestaurantInfo;

const styles = StyleSheet.create({
  textCss: {
    fontFamily: fonts.jakarta_semibold,
    fontSize: RFValue(12),
    color: colors.C132235,
    marginHorizontal: ScreenRatio(2),
  },
});
