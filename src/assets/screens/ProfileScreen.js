import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import CommonHeader from '../components/CommonHeader';
import { colors } from '../colors';
import { images } from '../imagesUrls';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../fonts';
import { RFValue, ScreenRatio } from '../utility/screenDimensions';

function ProfileScreen(props) {
  const [toggle, setToggle] = useState("");
  const [edit, setEdit] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Ceff7f6 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: ScreenRatio(2),
        }}
      >
        <CommonHeader
          isLeftImage={true}
          left_arrow_img={images.left_arrow}
          isTitle={true}
          title="Profile"
          onPress1={() => props?.navigation.navigate('Home')}
        />
        <TouchableOpacity
        onPress={()=>setEdit(!edit)}
          style={[
            styles.flexCss,
            {
              marginRight: ScreenRatio(2),
              gap: ScreenRatio(0.5),
              borderWidth: 0.5,
              paddingHorizontal: ScreenRatio(1),
              paddingVertical: ScreenRatio(0.25),
              borderRadius: ScreenRatio(1.25),
            },
          ]}
        >
          <Image source={images.edit_img} style={styles.editImg} />
          <Text style={styles.editTxtCss}>{edit? "Save" :"Edit"}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: ScreenRatio(4) }}>
        <View style={[styles.boxCss, { marginTop: ScreenRatio(0)}]}>
          <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:ScreenRatio(1) }}>
            <View style={styles.viewCss}>
              <Text style={styles.nameTxtCss}>HS</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Harshit Sharma</Text>
              <Text
                style={[styles.txtCss, { marginVertical: ScreenRatio(0.2) }]}
              >
                sharma.harshit0606@gmail.com
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={images.gold_img} style={[styles.editImg]} />
                <Text
                  style={[
                    styles.txtCss,
                    {
                      marginLeft: ScreenRatio(0.5),
                      marginRight: ScreenRatio(1.25),
                    },
                  ]}
                >
                  Gold Member
                </Text>
                <Text style={styles.txtCss}>2450 Points</Text>
              </View>
            </View>
          </View>

          {edit  ?( <View>
            <Text style={styles.txtCss}>Full Name</Text>
            <TextInput
              placeholder="John Doe"
              placeholderTextColor={colors.C364B63}
              style={[styles.lightTxtCss, styles.inputViewCss]}
            />
            <Text style={styles.txtCss}>Email</Text>
            <TextInput
              placeholder="abc@gmail.com"
              placeholderTextColor={colors.C364B63}
              style={[styles.lightTxtCss, styles.inputViewCss]}
            />
            <Text style={styles.txtCss}>Phone No.</Text>
            <TextInput
              placeholder="123456"
              placeholderTextColor={colors.C364B63}
              style={[styles.lightTxtCss, styles.inputViewCss]}
            />
            <Text style={styles.txtCss}>Birthday</Text>
            <TextInput
              placeholder="25/03/2002"
              placeholderTextColor={colors.C364B63}
              style={[styles.lightTxtCss, styles.inputViewCss]}
            />
          </View>) : (<View>
             <View style={styles.flexGapCss}>
              <Image style={[styles.editImg]} source={images.email_img} />
              <Text style={styles.txtCss}>sharma.harshit0606@gmail.com</Text>
            </View>

              <View style={styles.flexGapCss}>
              <Image style={[styles.editImg]} source={images.phone_img} />
              <Text style={styles.txtCss}>8619290606</Text>
            </View>

              <View style={styles.flexGapCss}>
              <Image style={[styles.editImg]} source={images.birthday_img} />
              <Text style={styles.txtCss}>25/03/2002</Text>
            </View>
           </View>) }

        
        </View>

        <View style={[styles.boxCss]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: ScreenRatio(1),
            }}
          >
            <Image source={images.notify_img} style={styles.editImg} />
            <Text style={styles.txtCss}>Notification Preferences</Text>
          </View>
          <View style={styles.flexGapCss}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Order Updates</Text>
              <Text style={styles.lightTxtCss}>
                Get notified about order status
              </Text>
            </View>
            <TouchableOpacity onPress={() => setToggle("orderupdates")}>
              <Image
                style={{
                  height: ScreenRatio(4),
                  width: ScreenRatio(4),
                  resizeMode: 'contain',
                  tintColor: colors.CFFA600,
                }}
                source={toggle === "orderupdates" ? images.on_img : images.off_img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.flexGapCss}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Promotions and Deals</Text>
              <Text style={styles.lightTxtCss}>Receive Special offers</Text>
            </View>
            <TouchableOpacity onPress={() => setToggle("promotions")}>
              <Image
                style={{
                  height: ScreenRatio(4),
                  width: ScreenRatio(4),
                  resizeMode: 'contain',
                  tintColor: colors.CFFA600,
                }}
                source={toggle === "promotions" ? images.on_img : images.off_img}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.flexGapCss}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Whatsapp messages</Text>
              <Text style={styles.lightTxtCss}>
                Get greeting messages on whasapp
              </Text>
            </View>
            <TouchableOpacity onPress={() => setToggle("whatsapp")}>
              <Image
                style={{
                  height: ScreenRatio(4),
                  width: ScreenRatio(4),
                  resizeMode: 'contain',
                  tintColor: colors.CFFA600,
                }}
                source={toggle === "whatsapp" ? images.on_img : images.off_img}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(2) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.recent_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Order History</Text>
              <Text style={styles.lightTxtCss}>View past orders</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.wallet_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Payment methods</Text>
              <Text style={styles.lightTxtCss}>Card and Cash</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.loyalty_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Loyalty Program</Text>
              <Text style={styles.lightTxtCss}>Points and Reward</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.info_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Restaurant info</Text>
              <Text style={styles.lightTxtCss}>Hours Location and Contact</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.feedback_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Feedback & Reviews</Text>
              <Text style={styles.lightTxtCss}>Rate your experience</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.qr_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>QR Feedback</Text>
              <Text style={styles.lightTxtCss}>
                Scan qr from bill for quick feedback
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.setting_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>App Settings</Text>
              <Text style={styles.lightTxtCss}>Privacy and Preferences</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.boxCss, { marginTop: ScreenRatio(1) }]}>
          <TouchableOpacity
            style={[
              styles.flexGapCss,
              { marginTop: ScreenRatio(0), gap: ScreenRatio(2) },
            ]}
          >
            <Image style={styles.editImg} source={images.logout_img} />
            <View style={{ flex: 1 }}>
              <Text style={styles.txtCss}>Sign Out</Text>
              <Text style={styles.lightTxtCss}>Logout from your account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  boxCss: {
    borderWidth: 1,
    borderColor: colors.CE1E6EF,
    padding: ScreenRatio(2),
    borderRadius: ScreenRatio(2),
    backgroundColor: colors.CFFFFFF,
    marginHorizontal: ScreenRatio(2),
    marginTop: ScreenRatio(2),
  },
  flexGapCss: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ScreenRatio(1),
    gap: ScreenRatio(1),
  },
  editImg: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode: 'contain',
  },
  flexCss: {
    flexDirection: 'row',
    alignItems: 'center',
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
  nameTxtCss: {
    fontSize: RFValue(14),
    fontFamily: fonts.nunito_Bold,
    color: colors.C132235,
    alignSelf: 'center',
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
});
