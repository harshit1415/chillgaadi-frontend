import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
} from 'react-native';
import { images } from '../imagesUrls';
import { RFValue, ScreenRatio } from '../utility/screenDimensions';
import { colors } from '../colors';
import { fonts } from '../fonts';
function CustomTabBar(props) {
  // console.log('from custom tab', props.state.index);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          elevation: 5,
          backgroundColor: colors.CFFFFFF,
          paddingVertical: ScreenRatio(1),
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Home')}
        style={styles.viewCss}
      >
        <Image
          style={[
            styles.imgCss,
            { tintColor: props.state.index === 0 ? colors.CFFA400 : colors.C000000 },
          ]}
          source={images.home_img}
        />
        <Text
          style={[
            styles.txtCss,
            { color: props.state.index === 0 ? colors.C2D2D2D : colors.C6D6E71 },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Menu')}
        style={styles.viewCss}
      >
        <Image
          style={[
            styles.imgCss,
            { tintColor: props.state.index === 1 ?  colors.CFFA400 : colors.C000000},
          ]}
          source={images.menu_img}
        />
        <Text
          style={[
            styles.txtCss,
            { color: props.state.index === 1 ? colors.C2D2D2D : colors.C6D6E71 },
          ]}
        >
          Menu
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Cart')}
        style={styles.viewCss}
      >
        <Image
          style={[
            styles.imgCss,
            { tintColor: props.state.index === 2 ?  colors.CFFA400 : colors.C000000,}
          ]}
          source={images.cart_img}
        />
        <Text
          style={[
            styles.txtCss,
            { color: props.state.index === 2 ?  colors.C2D2D2D : colors.C6D6E71  },
          ]}
        >
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Reserve')}
        style={styles.viewCss}
      >
        <Image
          style={[
            styles.imgCss,
            { tintColor: props.state.index === 3 ?  colors.CFFA400 : colors.C000000 },
          ]}
          source={images.reserve_img}
        />
        <Text
          style={[
            styles.txtCss,
            { color: props.state.index === 3 ? colors.C2D2D2D : colors.C6D6E71  },
          ]}
        >
          Reserve
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props?.navigation.navigate('Profile')}
        style={styles.viewCss}
      >
        <Image
          style={[
            styles.imgCss,
            { tintColor: props.state.index === 4 ?  colors.CFFA400 : colors.C000000},
          ]}
          source={images.user_img}
        />
        <Text
          style={[
            styles.txtCss,
            { color: props.state.index === 4 ? colors.C2D2D2D : colors.C6D6E71 },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomTabBar;

const styles = StyleSheet.create({
  imgCss: {
    height: ScreenRatio(2.5),
    width: ScreenRatio(2.5),
    resizeMode: 'contain',
  },
  viewCss: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCss: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(10),
    marginTop:3
  },
});
