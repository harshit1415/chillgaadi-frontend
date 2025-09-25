import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
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

function RewardScreen(props) {
  const itemsData = [
    {
      id: 1,
      image: images.pasta_img,
      description:
        'Delicious cheesy pizza topped with fresh veggies and olives.',
      freeText: 'Best seller of the week!',
      points: 120,
    },
    {
      id: 2,
      image: images.cake_img,
      description: 'Refreshing cold coffee blended with chocolate syrup.',
      freeText: 'Customer favorite ❤️',
      points: 80,
    },
    {
      id: 3,
      image: images.pizza_img,
      description: 'Crispy French fries served with spicy peri-peri seasoning.',
      freeText: 'Limited time offer',
      points: 50,
    },
    {
      id: 4,
      image: images.f1_img,
      description:
        'Healthy green salad with organic veggies and olive oil dressing.',
      freeText: 'Stay fit, eat light 🥗',
      points: 100,
    },

  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.CFFFFFF }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor= {colors.Ceff7f6}
      />
      <CommonHeader
        headerViewCss={{
          backgroundColor: colors.Ceff7f6,
          paddingBottom: ScreenRatio(2),
        }}
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="Rewards"
        onPress1={() => props?.navigation.navigate('Home')}
      />

      <FlatList
        style={{
          flex: 1,
          paddingHorizontal: ScreenRatio(2),
          backgroundColor: colors.Ceff7f6,
          paddingBottom: ScreenRatio(7),
        }}
        contentContainerStyle={{
          paddingBottom: ScreenRatio(7), // ✅ use here
        }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data={itemsData}
        keyExtractor={itemsData => itemsData.id.toString()}
        ListHeaderComponent={
          <>
            <Text
              style={{
                fontSize: RFValue(14),
                color: colors.C000000,
                fontFamily: fonts.poppins_bold,
                textAlign: 'center',
              }}
            >
              Collect Reward With Reward Points
            </Text>
            <Text
              style={{
                fontSize: RFValue(14),
                color: colors.C000000,
                fontFamily: fonts.poppins_medium,
                textAlign: 'center',
              }}
            >
              {'0'} Loyalty points available
            </Text>
          </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                styles.elevationCss,
                {
                  width: DWidthPercent(44),
                  alignItems: 'center',
                  marginTop: ScreenRatio(1.5),
                  backgroundColor: colors.CFFFFFF,
                  paddingHorizontal: ScreenRatio(1),
                  paddingTop: ScreenRatio(1),
                  borderRadius: ScreenRatio(2),
                  borderColor: colors.CE1E6EF,
                  borderWidth: 1,
                },
              ]}
            >
              <View style={{ position: 'relative', width: '100%' }}>
                <View style={{ height: ScreenRatio(18), width: '100%' }}>
                  <Image
                    style={[
                      {
                        height: '100%',
                        width: '100%',
                        borderRadius: ScreenRatio(1.5),
                        resizeMode: 'cover',
                        borderWidth: 1,
                        borderColor: colors.CE1E6EF,
                      },
                    ]}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: fonts.poppins_ItalicBold,
                    color: colors.CFFFFFF,
                    fontSize: RFValue(13),
                    position: 'absolute',
                    bottom: 0,
                    left: 5,
                    right: 5,
                    textAlign: 'center',
                  }}
                >
                  {item.freeText}
                </Text>
              </View>
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: fonts.poppins_regular,
                  color: colors.C364B63,
                  fontSize: RFValue(10),
                }}
              >
                {item.description}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: fonts.nunito_ItalicBold,
                      color: colors.C000000,
                      fontSize: RFValue(16),
                    }}
                  >
                    {item.points}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fonts.poppins_medium,
                      color: colors.C364B63,
                      fontSize: RFValue(14),
                      top: -3,
                    }}
                  >
                    points
                  </Text>
                </View>

                <Image
                  source={images.lock_img}
                  style={{
                    height: ScreenRatio(2.5),
                    width: ScreenRatio(2.5),
                    resizeMode: 'contain',
                    marginRight: ScreenRatio(1.25),
                  }}
                />
                <TouchableOpacity
                  onPress={() => props?.navigation.navigate('Reward')}
                >
                  <Image
                    style={{
                      height: ScreenRatio(3.5),
                      width: ScreenRatio(3.5),
                      resizeMode: 'contain',
                    }}
                    source={images.black_arrow_img}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

    </SafeAreaView>
  );
}

export default RewardScreen;

const styles = StyleSheet.create({
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
