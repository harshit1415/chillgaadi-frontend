import React, { useState } from 'react';
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
  KeyboardAvoidingView,
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

function CheckoutScreen(props) {
  const orderSummaryData = [
    { name: 'Brushectta', quantity: 1, price: '156.0' },
    { name: 'Panner Do Pyaza', quantity: 1, price: '256.0' },
    { name: 'Chopsticks', quantity: 1, price: '286.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Brushectta', quantity: 1, price: '156.0' },
    { name: 'Panner Do Pyaza', quantity: 1, price: '256.0' },
    { name: 'Chopsticks', quantity: 1, price: '286.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Brushectta', quantity: 1, price: '156.0' },
    { name: 'Panner Do Pyaza', quantity: 1, price: '256.0' },
    { name: 'Chopsticks', quantity: 1, price: '286.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Brushectta', quantity: 1, price: '156.0' },
    { name: 'Panner Do Pyaza', quantity: 1, price: '256.0' },
    { name: 'Chopsticks', quantity: 1, price: '286.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
    { name: 'Chocolava Cake', quantity: 2, price: '456.0' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Ceff7f6 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <CommonHeader
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="Checkout"
      />
      <Text
        style={[
          styles.lightTxtCss,
          { marginLeft: ScreenRatio(5), marginVertical: ScreenRatio(0.5) },
        ]}
      >
        Step 1 0f 3
      </Text>

      <View style = {{marginLeft:ScreenRatio(2),flexDirection:"row",alignItems:"center",marginVertical:ScreenRatio(1)}}>
        <View style={styles.viewCss}>
          <Text style={styles.viewTxtCss}>1</Text>
        </View>
        <View style = {{flexDirection:"row",alignItems:"center"}}>
          <Text style = {{height:1 , width:DWidthPercent(22),backgroundColor:colors.C266141}}></Text>
           <View style={styles.viewCss}>
          <Text style={styles.viewTxtCss}>2</Text>
        </View>
          <Text style = {{height:1 , width:DWidthPercent(22),backgroundColor:colors.C266141}}></Text>
          
        
        </View>
         <View style={styles.viewCss}>
          <Text style={styles.viewTxtCss}>3</Text>
        </View>
      </View>

      <View style={[styles.boxCss, { height: DHeightPercent(60) }]}>
        <Text
          style={[
            styles.txtCss,
            {
              fontFamily: fonts.nunito_Bold,
              fontSize: RFValue(12),
              marginBottom: ScreenRatio(1),
            },
          ]}
        >
          Order Summary
        </Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: ScreenRatio(2) }}
          data={orderSummaryData}
          renderItem={({ item }) => {
            return (
              <View style={[styles.flexCss]}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.txtCss]}>{item.name}</Text>
                  <Text style={styles.lightTxtCss}>Qty:{item.quantity}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image source={images.rupee_img} style={styles.editImg} />
                  <Text style={styles.txtCss}>{item.price}</Text>
                </View>
              </View>
            );
          }}
          ListFooterComponent={
            <>
              <View
                style={[
                  styles.flexCss,
                  {
                    borderTopWidth: 1,
                    borderColor: colors.CE1E6EF,
                    paddingTop: ScreenRatio(1),
                  },
                ]}
              >
                <Text style={[styles.txtCss, { flex: 1 }]}>Cart Total</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image source={images.rupee_img} style={styles.editImg} />
                  <Text style={[styles.txtCss]}>189.0</Text>
                </View>
              </View>

              <View style={styles.flexCss}>
                <Text style={[styles.txtCss, { flex: 1 }]}>
                  Taxes (GST includes)
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image source={images.rupee_img} style={[styles.editImg]} />
                  <Text style={[styles.txtCss]}>78.0</Text>
                </View>
              </View>

              <View
                style={[
                  styles.flexCss,
                  {
                    paddingVertical: ScreenRatio(1),
                    borderTopWidth: 1,
                    borderColor: colors.CE1E6EF,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.lightTxtCss,
                    {
                      flex: 1,
                      fontSize: RFValue(13),
                      fontFamily: fonts.nunito_Bold,
                    },
                  ]}
                >
                  Grand Total
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image source={images.rupee_img} style={styles.editImg} />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: fonts.nunito_Bold,
                      color: colors.C132235,
                    }}
                  >
                    198.0
                  </Text>
                </View>
              </View>
            </>
          }
        />
      </View>
     
      <CommonButton
        text="Continue to Details"
        buttonViewCss={{ margin: ScreenRatio(2) }}
      />
    </SafeAreaView>
  );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  flexCss: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ScreenRatio(1),
  },
  boxCss: {
    borderWidth: 1,
    borderColor: colors.CE1E6EF,
    padding: ScreenRatio(2),
    borderRadius: ScreenRatio(2),
    backgroundColor: colors.CFFFFFF,
    marginHorizontal: ScreenRatio(2),
  },
  txtCss: {
    fontSize: RFValue(11),
    fontFamily: fonts.nunito_semibold,
    color: colors.C132235,
  },
  lightTxtCss: {
    fontSize: RFValue(10),
    fontFamily: fonts.nunito_regular,
    color: colors.C364B63,
  },
  editImg: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode: 'contain',
    marginTop: 2,
    left: 2,
  },
  viewCss: {
    backgroundColor:colors.C08875D,
    justifyContent: 'center',
    alignItems:"center",
    height: ScreenRatio(5),
    width: ScreenRatio(5),
    borderRadius: ScreenRatio(2.5)
  },
  viewTxtCss: {
    fontSize: RFValue(13),
    fontFamily: fonts.nunito_semibold,
    color: colors.CFFFFFF,
  },
});
