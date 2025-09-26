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
} from '../utility/screenDimensions';
import CommonButton from '../components/CommonButton';

function CartScreen(props) {
  const [count, setCount] = useState(1);
  const cartData = [
    {
      image: images.pizza_img,
      title: 'Chocolava Cake',
      desccription: '! Chocolava with extra chocolate 3 Pieces',
      price: '234',
    },
     {
      image: images.burger_img,
      title: 'Chocolava Cake',
      desccription: '! Chocolava with extra chocolate 3 Pieces',
      price: '198',
    },
    

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
        title="My Cart"
          onPress1={() => props?.navigation.navigate('Home')}

      />
      <FlatList 
      // contentContainerStyle = {{paddingBottom:ScreenRatio(15)}}
      data = {cartData}
      keyExtractor={(_,index)=>index.toString()}
      renderItem={({item})=>{
       return (
   <View
        style={[styles.boxCss, styles.elevationCss, { flexDirection: 'row' ,marginBottom:ScreenRatio(1),paddingVertical:ScreenRatio(1)}]}
      >
        <Image
          style={{
            height: ScreenRatio(8),
            width: ScreenRatio(8),
            borderRadius: ScreenRatio(4),
            resizeMode: 'cover',
            marginHorizontal: ScreenRatio(2),
            marginTop:ScreenRatio(1)
          }}
          source={item.image}
        />
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>{item.title}</Text>
              <Text style={styles.lightTxtCss}>
                {item.desccription}
              </Text>
            </View>
            <Image
              style={[styles.editImg, { marginHorizontal: ScreenRatio(1) }]}
              source={images.delete_img}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: ScreenRatio(1),
              marginVertical: ScreenRatio(1),
              justifyContent: 'space-between',
              // alignItems: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.Ceff7f6,
                paddingVertical: ScreenRatio(0.5),
                paddingHorizontal: ScreenRatio(1),
                borderRadius: ScreenRatio(1),
              }}
            >
              <Image
                source={images.rupee_img}
                style={{
                  height: ScreenRatio(2.5),
                  width: ScreenRatio(2.5),
                  resizeMode: 'contain',
                }}
              />
              <Text style={styles.priceCss}>349</Text>
            </View>
            <View style={styles.addItemsViewCss}>
              <TouchableOpacity
                onPress={() =>
                  setCount(prev => {
                    // console.log('subtract', prev);
                    if (prev > 1) {
                      return prev - 1;
                    } else {
                      return 1;
                    }
                  })
                }
                style={[styles.countViewCss]}
              >
                <Image source={images.subtract_img} style={styles.IconCss} />
              </TouchableOpacity>
              <Text style={styles.countTxtCss}>{count}</Text>
              <TouchableOpacity
                onPress={() => setCount(prev => prev + 1)}
                style={[styles.countViewCss]}
              >
                <Image source={images.add_img} style={styles.IconCss} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
        )
      }}

      ListFooterComponent={<>
      <View
        style={[
          styles.boxCss,
          { paddingHorizontal: ScreenRatio(2), marginTop: ScreenRatio(2) },
        ]}
      >
        <Text style={styles.txtCss}>Order Summary</Text>
        <View style={styles.flexCss}>
          <Text
            style={[styles.lightTxtCss, { flex: 1, fontSize: RFValue(12) }]}
          >
            Cart Total
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image source={images.rupee_img} style={styles.editImg} />
            <Text
              style={[styles.lightTxtCss, { fontSize: RFValue(12), left: -2 }]}
            >
              189
            </Text>
          </View>
        </View>

        <View style={styles.flexCss}>
          <Text
            style={[styles.lightTxtCss, { flex: 1, fontSize: RFValue(12) }]}
          >
            Taxes (GST includes)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image source={images.rupee_img} style={[styles.editImg]} />
            <Text
              style={[styles.lightTxtCss, { fontSize: RFValue(12), left: -2 }]}
            >
              78.0
            </Text>
          </View>
        </View>

        <View style={[styles.flexCss, { marginTop: ScreenRatio(2) }]}>
          <Text
            style={[
              styles.lightTxtCss,
              { flex: 1, fontSize: RFValue(14), fontFamily: fonts.nunito_Bold },
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
              style={[
                styles.lightTxtCss,
                {
                  fontSize: RFValue(14),
                  fontFamily: fonts.nunito_Bold,
                  left: -2,
                },
              ]}
            >
              198.0
            </Text>
          </View>
        </View>
      </View>

       <CommonButton
        text="Place Order"
        buttonViewCss={{
          margin: ScreenRatio(2)   
        }}
          onPress  = {()=>props?.navigation.navigate("Home")}
      />
      </>}
      />

    </SafeAreaView>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  flexCss: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: ScreenRatio(1),
  },
  boxCss: {
    borderWidth: 1,
    borderColor: colors.transparent,
    paddingVertical: ScreenRatio(2),
    borderRadius: ScreenRatio(2),
    backgroundColor: colors.CFFFFFF,
    marginHorizontal: ScreenRatio(2),
  },

  editImg: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode: 'contain',
    marginTop: 2,
  },
  editTxtCss: {
    fontSize: RFValue(11),
    fontFamily: fonts.nunito_semibold,
    color: colors.C132235,
  },
  viewCss: {
    height: ScreenRatio(9),
    width: ScreenRatio(9),
    borderRadius: ScreenRatio(4.5),
    backgroundColor: colors.Ceff7f6,
    justifyContent: 'center',
    marginRight: ScreenRatio(2),
  },
  inputViewCss: {
    backgroundColor: colors.Ceff7f6,
    padding: ScreenRatio(1),
    borderRadius: ScreenRatio(1),
    marginVertical: ScreenRatio(0.5),
  },
  btnViewCss: {
    borderRadius: ScreenRatio(1),
    backgroundColor: colors.C266141,
    color: colors.CFFFFFF,
    padding: ScreenRatio(0.7),
  },

  txtCss: {
    fontSize: RFValue(12),
    fontFamily: fonts.nunito_Bold,
    color: colors.C132235,
  },
  lightTxtCss: {
    fontSize: RFValue(10),
    fontFamily: fonts.nunito_semibold,
    color: colors.C132235,
  },
  elevationCss: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  priceCss: {
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(15),
    color: colors.C000000,
    bottom: 1,
  },
  addItemsViewCss: {
    //borderWidth:.5,
    flexDirection: 'row',
    backgroundColor: colors.CFFA600,
    borderRadius: ScreenRatio(0.4),
  },
  IconCss: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingHorizontal: ScreenRatio(1.2),
  },

  countViewCss: {
    backgroundColor: colors.CFF9B08,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  countTxtCss: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(12),
    color: colors.C000000,
    backgroundColor: colors.CFFE4E4,
    paddingVertical: ScreenRatio(0.5),
    paddingHorizontal: ScreenRatio(1.5),
    backgroundColor: colors.CFFE4E4,
  },
});
