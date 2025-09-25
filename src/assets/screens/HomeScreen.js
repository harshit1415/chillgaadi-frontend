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
import { colors } from '../colors';
import { images } from '../imagesUrls';
import {
  ScreenRatio,
  RFValue,
  DWidthPercent,
  DHeightPercent,
} from '../utility/screenDimensions';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';

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
      id: 1,
      image: images.pizza_img,
      item_name: 'Margherita Pizza',
      offer: 'Flat 20% OFF',
      validity: 'valid till midnight',
    },
    {
      id: 2,
      image: images.burger_img,
      item_name: 'Veggie Burger',
      offer: 'Buy 1 Get 1 Free',
      validity: 'valid till midnight',
    },
    {
      id: 3,
      image: images.pasta_img,
      item_name: 'Pasta Alfredo',
      offer: 'Special Price ₹249',
      validity: 'valid till midnight',
    },
    {
      id: 4,
      image: images.cake_img,
      item_name: 'ChocoLava Cake',
      offer: 'Special Price ₹349',
      validity: 'valid till midnight',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.CFFFFFF }}>
       <StatusBar
        translucent
        barStyle="dark-content"
         backgroundColor="rgba(255, 255, 255, .4)"
      />
      <ScrollView contentContainerStyle={{ paddingBottom: ScreenRatio(5) }}>
        <View style = {{backgroundColor:colors.CFFAF70}}>
          <Carousel
          defaultIndex={4}
          loop={true}
          width={width}
          height={DHeightPercent(45)}
          autoPlay={true}
          data={crouselData}
          mode={'horizontal-stack'}
          style={{borderRadius:ScreenRatio(3) }}
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 50,
            parallaxAdjacentItemScale: 1,
          }}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <View
              style={{
                width: DWidthPercent(100),
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
                  height: '100%',
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
        </View>

        <LinearGradient
          colors={[colors.CFFAF70, colors.CFF5963]}
          style={[
            {
              padding:ScreenRatio(2),
              marginBottom: ScreenRatio(2),
              borderBottomLeftRadius:ScreenRatio(4),
              borderBottomRightRadius:ScreenRatio(4)
            },
          ]}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontFamily: fonts.jakarta_semibold,
                fontSize: RFValue(15),
                color: colors.CFFFFFF,
              }}
            >
              Harshit Sharma
            </Text>
            <TouchableOpacity
              onPress={() => props?.navigation.navigate('Reward')}
            >
              <Image
                style={{
                  height: ScreenRatio(3.5),
                  width: ScreenRatio(3.5),
                  resizeMode: 'contain',
                  
                }}
                source={images.left_drop_img}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' ,  marginVertical: ScreenRatio(1),}}>
            <Text
              style={{
                fontFamily: fonts.nunito_Bold,
                fontSize: ScreenRatio(5),
                color: colors.CFFFFFF,
              }}
            >
              0
            </Text>
            <Text
              style={{
                fontFamily: fonts.jakarta_semibold,
                fontSize: RFValue(14),
                color: colors.CFFFFFF,
                marginLeft: ScreenRatio(1),
              }}
            >
              Reward{'\n'}Points
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor : colors.CFFFFFF,
              paddingHorizontal:ScreenRatio(1),
              paddingVertical :ScreenRatio(.5),
              borderRadius:ScreenRatio(3)
            }}
          >
            <Image
              style={{
                height: ScreenRatio(4),
                width: ScreenRatio(9),
                resizeMode: 'contain',
                left:5
              }}
              source={images.logo_img}
            />
            <TouchableOpacity
              onPress={() => props?.navigation.navigate('AboutReward')}
            >
              <Image
                style={{
                  height: ScreenRatio(3),
                  width: ScreenRatio(3),
                  resizeMode: 'contain',
                    tintColor : colors.CFFA600
                }}
                source={images.detail_img}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View
          style={[
            styles.boxCss,
            {
              margin: ScreenRatio(2),
              backgroundColor: colors.CFFFFFF,
            },
          ]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.rewards_img} style={styles.imgCss} />
            <Text style={styles.cardTitleTxtCss}>Today's Special</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ paddingBottom: ScreenRatio(2) }}
            data={todaySpecial}
            keyExtractor={todaySpecial => todaySpecial.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.elevationCss,
                    {
                      width: DWidthPercent(42),
                      alignItems: 'center',
                      marginTop: ScreenRatio(1.5),
                      backgroundColor: colors.CFFFFFF,
                      padding: ScreenRatio(1),
                      borderRadius: ScreenRatio(2),
                      borderColor: colors.CE1E6EF,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Image
                    style={[
                      {
                        height: ScreenRatio(16),
                        width: '100%',
                        borderRadius: ScreenRatio(1.5),
                        resizeMode: 'cover',
                      },
                    ]}
                    source={item.image}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: ScreenRatio(-2.5),
                    }}
                  >
                    <Text
                      style={[
                        styles.reOdrBtnCss,
                        {
                          backgroundColor: colors.CFFA600,
                          fontFamily: fonts.nunito_Bold,
                          fontSize: RFValue(10),
                          color: colors.CFFFFFF,
                        },
                      ]}
                    >
                      {item.offer}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.poppins_medium,
                        fontSize: RFValue(11),
                        color: colors.C132235,
                      }}
                    >
                      {item.item_name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.poppins_regular,
                        fontSize: RFValue(10),
                        color: colors.C132235,
                        top: -2,
                      }}
                    >
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
            scrollEnabled={false}
            data={recentOrders}
            keyExtractor={(_, index) => index.toString()}
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
        {/* <View
          style={[
            styles.boxCss,
            {
              margin: ScreenRatio(2),
              flexDirection: 'row',
              alignItems: 'center',
            },
            styles.elevationCss,
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
        </View> */}
      </ScrollView>
    </View>
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
    backgroundColor: colors.CFFA600,
  },
  reOdrTxtCss: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(11),
    color: colors.CFFFFFF,
    marginBottom: 2,
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
});
