import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { fonts } from '../fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../colors';
import { images } from '../imagesUrls';
import {
  ScreenRatio,
  RFValue,
  DWidthPercent,
  DHeightPercent,
} from '../utility/screenDimensions';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');
function HomeScreen(props) {
  const [itemLength, setItemLength] = useState(60);
  const crouselData = [
    {
      id: 1,
      name: 'Cheese Burst Pizza',
      offer: 'Flat 30% OFF',
      image: images.pizza_img,
    },
    {
      id: 2,
      name: 'Classic Burger Combo',
      offer: 'Buy 1 Get 1 Free',
      image: images.burger_img,
    },
    {
      id: 3,
      name: 'Pasta Alfredo',
      offer: '20% OFF Today',
      image: images.f4_img,
    },
    {
      id: 4,
      name: 'Biryani Platter',
      offer: '15% OFF',
      image: images.f1_img,
    },
    {
      id: 5,
      name: 'Chocolate Lava Cake',
      offer: 'Free with Meal',
      image: images.cake_img,
    },
  ];

  const recentOrders = [
    { name: 'Margheita Pizza', day: 'yesterday, 7:30 PM', reorder: 'reorder' },
    { name: 'Margheita Pizza', day: 'yesterday, 7:30 PM', reorder: 'reorder' },
    { name: 'Margheita Pizza', day: 'yesterday, 7:30 PM', reorder: 'reorder' },
  ];
  const todaySpecial = [
    {
      image: images.pizza_img,
      item_name: 'Margherita Pizza',
      offer: 'Flat 20% OFF',
      validity: 'valid till midnight',
    },
    {
      image: images.burger_img,
      item_name: 'Veggie Burger',
      offer: 'Buy 1 Get 1 Free',
      validity: 'valid till midnight',
    },
    {
      image: images.pasta_img,
      item_name: 'Pasta Alfredo',
      offer: 'Special Price ₹249',
      validity: 'valid till midnight',
    },
     {
      image: images.cake_img,
      item_name: 'ChocoLava Cake',
      offer: 'Special Price ₹349',
      validity: 'valid till midnight',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.CFFFFFF }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <ScrollView stickyHeaderIndices={[2]}>
        <View style={[styles.headerViewCss]}>
          <Text style={[styles.titleTxtCss]}>Welcome John Doe</Text>
          <TouchableOpacity onPress={() => props?.navigation.navigate('Cart')}>
            <Image source={images.cart_img} style={styles.leftArrowCss} />
            {itemLength > 0 && (
              <View
                style={{
                  position: 'absolute',
                  height: ScreenRatio(2.2),
                  width: ScreenRatio(2.2),
                  borderRadius: ScreenRatio(1.1),
                  backgroundColor: colors.CFF003C,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  marginRight: 10,
                  marginTop: -4,
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.nunito_semibold,
                    color: colors.CFFFFFF,
                    fontSize: RFValue(8),
                  }}
                >
                  {itemLength < 99 ? itemLength : '99+'}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: ScreenRatio(2),
          }}
        >
          <Text
            style={{
              fontFamily: fonts.nunito_Bold,
              fontSize: RFValue(12),
              color: colors.C132235,
            }}
          >
            Ready to order something delicious{' '}
          </Text>
          <Image
            source={images.drooling_img}
            style={{
              height: ScreenRatio(4),
              width: ScreenRatio(4),
              resizeMode: 'contain',
            }}
          />
        </View>

        <View style={styles.searchBarViewCss}>
          <View style={styles.searchViewCss}>
            <Image style={styles.searchImgCss} source={images.search_img} />
            <TextInput
              placeholder="What are you looking for?"
              placeholderTextColor={colors.C000000}
              style={styles.textInputCss}
            />
          </View>
        </View>
        {/* <FlatList
          contentContainerStyle={{
            paddingHorizontal: ScreenRatio(1.5),
            gap: ScreenRatio(1.5),
            marginVertical: ScreenRatio(3),
          }}
          horizontal
          data={image}
          snapToInterval={ScreenRatio(1.5) + DWidthPercent(85)}
          renderItem={({ item }) => {
            return (
              <View
                style={{ height: ScreenRatio(20), width: DWidthPercent(85) }}
              >
                <Image
                  source={item}
                  style={{
                    width: '100%',
                    height: ScreenRatio(20),
                    resizeMode: 'cover',
                    borderRadius: ScreenRatio(2),
                  }}
                />
              </View>
            );
          }}
        /> */}

        <Carousel
          defaultIndex={4}
          //  loop = {true}
          width={width}
          height={DHeightPercent(33)}
          // autoPlay={true}
          data={crouselData}
          mode="parallax"
          style={{ marginBottom: ScreenRatio(2) }}
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 50,
            parallaxAdjacentItemScale: .8
          }}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View
              style={{
                width: DWidthPercent(90),
                backgroundColor: colors.CFFFFFF,
                borderRadius: ScreenRatio(1.25),
                elevation: 6,
                overflow: 'hidden',
                alignSelf: 'center',
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: DHeightPercent(25),
                  width: '100%',
                  resizeMode: 'cover',
                  overflow: 'hidden',
                }}
              />
              <View
                style={{
                  marginVertical: ScreenRatio(1),
                  marginHorizontal: ScreenRatio(2),
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.nunito_Bold,
                    fontSize: RFValue(12),
                    color: colors.C132235,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.nunito_regular,
                    fontSize: RFValue(11),
                    color: colors.C364B63,
                  }}
                >
                  {item.offer}
                </Text>
              </View>
            </View>
          )}
        />

        <View
          style={[
            styles.boxCss,
            {
              marginHorizontal: ScreenRatio(2),
              marginBottom: ScreenRatio(2),
              backgroundColor: colors.CFFFFFF,
            },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.rewards_img} style={styles.imgCss} />
            <Text style={styles.cardTitleTxtCss}>Today's Special</Text>
          </View>
          <FlatList
           numColumns={2}
          contentContainerStyle = {{paddingBottom:ScreenRatio(2)}}
            data={todaySpecial}
            key={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.elevationCss,
                    {
                      // flexDirection: 'row',
                      width:DWidthPercent(42),
                      alignItems: 'center',
                      marginTop: ScreenRatio(1.5),
                      marginRight:ScreenRatio(1.25),
                      backgroundColor: colors.CFFFFFF,
                      padding: ScreenRatio(1),
                      borderRadius: ScreenRatio(2),
                      borderColor: colors.CE1E6EF,
                      borderWidth:1,
                      
                    },
                  ]}
                >
                  <Image
                    style={[
                      styles.imgCss,
                      {
                        height: ScreenRatio(16),
                        width: "100%",
                        borderRadius: ScreenRatio(3),
                        resizeMode: 'cover',
                      },
                    ]}
                    source={item.image}
                  />
                  <View style = {{alignItems:"center"}}>
                      <Text
                      style={[
                        styles.reOdrBtnCss,
                        {
                          backgroundColor: colors.CFFA600,
                          fontFamily: fonts.nunito_Bold,
                          fontSize: RFValue(11),
                          color:colors.CFFFFFF
                        },
                      ]}
                    >
                      {item.offer}
                    </Text>
                    <Text style={styles.text1Css}>{item.item_name}</Text>
                    <Text style={[styles.text2Css, { marginBottom: 4 }]}>
                      {item.validity}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={[
            styles.boxCss,
            {
              marginHorizontal: ScreenRatio(2),
              backgroundColor: colors.CFFFFFF,
            },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.recent_img} style={styles.imgCss} />
            <Text style={styles.cardTitleTxtCss}>Recent Orders</Text>
          </View>
          <FlatList
            data={recentOrders}
            key={(_, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.cardViewCss}>
                  <View>
                    <Text style={styles.text1Css}>{item.name}</Text>
                    <Text style={styles.text2Css}>{item.day}</Text>
                  </View>
                  <TouchableOpacity style={styles.reOdrBtnCss}>
                    <Text style={styles.reOdrTxtCss}>{item.reorder}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View
          style={[
            styles.boxCss,
            {
              margin: ScreenRatio(2),
              flexDirection: 'row',
              alignItems: 'center',
            },
            styles.elevationCss
          ]}
        >
          <Image
            source={images.reward_img}
            style={[
              styles.imgCss,
              { height: ScreenRatio(3), width: ScreenRatio(3) },
            ]}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={styles.text1Css}>Loyalty Points</Text>
              <Text style={styles.text2Css}>
                You have{' '}
                <Text style={[styles.text1Css, { color: colors.C000000 }]}>
                  {'2050'}{' '}
                </Text>
                points
              </Text>
            </View>
            <TouchableOpacity style={[styles.reOdrBtnCss]}>
              <Text style={styles.reOdrTxtCss}>View Rewards</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  boxCss: {
    borderWidth: 1,
    borderColor: colors.CE1E6EF,
    padding: ScreenRatio(1),
    borderRadius: ScreenRatio(2),
    backgroundColor: colors.CFFFFFF,
  },
  headerViewCss: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ScreenRatio(2),
    marginTop: ScreenRatio(1),
  },
  leftArrowCss: {
    height: ScreenRatio(3.5),
    width: ScreenRatio(3.5),
    resizeMode: 'contain',
    marginRight: ScreenRatio(2),
  },
  titleTxtCss: {
    color: colors.C132235,
    fontFamily: fonts.jakarta_medium,
    fontSize: RFValue(16),
  },
  viewCss: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  txtCss: {
    color: colors.C132235,
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(12),
  },
  searchBarViewCss: {
    padding: ScreenRatio(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.CFFFFFF,
  },
  searchViewCss: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginRight: ScreenRatio(1.2),
    borderRadius: ScreenRatio(1),
    height: ScreenRatio(5),
    // backgroundColor: colors.CE1E6EF,
  },
  filterImgCss: {
    height: ScreenRatio(4),
    width: ScreenRatio(4),
    resizeMode: 'contain',
  },
  searchImgCss: {
    height: ScreenRatio(1.6),
    width: ScreenRatio(1.6),
    resizeMode: 'contain',
    marginLeft: 8,
  },
  textInputCss: {
    flex: 1,
    color: colors.C000000,
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(11),
    padding: 0,
    marginHorizontal: ScreenRatio(1),
  },
  cardViewCss: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: ScreenRatio(1),
    marginTop: ScreenRatio(1.5),
  },
  cardTitleTxtCss: {
    fontSize: RFValue(12),
    fontFamily: fonts.nunito_Bold,
    color: colors.C132235,
  },
  imgCss: {
    height: ScreenRatio(2.5),
    width: ScreenRatio(2.5),
    resizeMode: 'contain',
    marginHorizontal: ScreenRatio(1),
  },
  text1Css: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(12),
    color: colors.C132235,
  },
  text2Css: {
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(11),
    color: colors.C364B63,
  },
  reOdrBtnCss: {
    borderWidth: 1,
    borderColor: colors.CE1E6EF,
    borderRadius: ScreenRatio(1.2),
    paddingVertical: ScreenRatio(0.4),
    paddingHorizontal: ScreenRatio(1),
    backgroundColor: colors.C08875D,
  },
  reOdrTxtCss: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(11),
    color: colors.CFFFFFF,
    marginBottom: 2,
  },
  elevationCss: {
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
});
