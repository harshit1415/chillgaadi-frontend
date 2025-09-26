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
import { screensEnabled } from 'react-native-screens';

function OrderHistoryScreen(props) {
  const [categoryType, setCategoryType] = useState('Points');
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [timePeriod , setTimePeriod] = useState("")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Ceff7f6 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <CommonHeader
        // headerViewCss={{
        //   paddingBottom: ScreenRatio(2),
        // }}
        isLeftImage={true}
        left_arrow_img={images.left_arrow}
        isTitle={true}
        title="History"
                onPress1={() => props?.navigation.navigate("BottomBar", {
  screen: "Profile",
})}
      />
      <View style={styles.orderCategoryViewCss}>
        <TouchableOpacity
          disabled={categoryType === 'Points' && true}
          onPress={() => setCategoryType('Points')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'Points' && {
              borderBottomColor: colors.C266141,
            },
          ]}
        >
          <Text
            style={[
              styles.orderInActiveTxtCss,
              categoryType === 'Points' && styles.orderTxtCss,
            ]}
          >
            Points
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={categoryType === 'Rewards' && true}
          onPress={() => setCategoryType('Rewards')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'Rewards' && { borderBottomColor: colors.C266141 },
          ]}
        >
          <Text
            style={[
              styles.orderInActiveTxtCss,
              {
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: colors.CD3DDE7,
              },
              categoryType === 'Rewards' && styles.orderTxtCss,
            ]}
          >
            Rewards & Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={categoryType === 'OrderHistory' && true}
          onPress={() => setCategoryType('OrderHistory')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'OrderHistory' && {
              borderBottomColor: colors.C266141,
            },
          ]}
        >
          <Text
            style={[
              styles.orderInActiveTxtCss,
              categoryType === 'OrderHistory' && styles.orderTxtCss,
            ]}
          >
            Order History
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: ScreenRatio(1),
          marginLeft: ScreenRatio(3),
        }}
      >
        <Text
          style={{
            fontFamily: fonts.poppins_ItalicBold,
            fontSize: ScreenRatio(5),
            color: colors.C132235,
          }}
        >
          10
        </Text>
        <Text
          style={{
            fontFamily: fonts.poppins_ItalicBold,
            fontSize: ScreenRatio(3),
            color: colors.C132235,
            marginLeft: ScreenRatio(1.5),
          }}
        >
          Reward{'\n'}Points
        </Text>
      </View>

      <View style={styles.searchBarViewCss}>
        <View style={styles.searchViewCss}>
          <Image style={styles.searchImgCss} source={images.search_img} />
          <TextInput
            placeholder="Search by Bill No."
            placeholderTextColor={colors.C000000}
            style={styles.textInputCss}
          />
        </View>
        <TouchableOpacity onPress={() => setShowFilter(true)}>
          <Image style={styles.filterImgCss} source={images.filter_img} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        onRequestClose={() => setShowFilter(false)}
        animationType="slide"
        visible={showFilter}
      >
        <TouchableOpacity
          onPress={() => setShowFilter(false)}
          style={styles.modelViewCss}
        >
          <TouchableWithoutFeedback>
            <View style={styles.filterModalViewCss}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts.nunito_Bold,
                    fontSize: RFValue(16),
                    color: colors.C132235,
                  }}
                >
                  Filters
                </Text>
                <TouchableOpacity onPress={() => setShowFilter(false)}>
                  <Image
                    source={images.cross_img}
                    style={{
                      height: ScreenRatio(4),
                      width: ScreenRatio(4),
                      resizeMode: 'contain',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={[styles.txtCss, styles.modalTitleTxtCss]}>
                Points
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: ScreenRatio(1.5),
                  borderBottomWidth: 1,
                  borderBottomColor: colors.C132235,
                }}
              >
                <TouchableOpacity onPress={() => setFilterType('All')}>
                  <Image
                    style={styles.crossImgCss}
                    source={
                      filterType === 'All'
                        ? images.active_circle_img
                        : images.inactive_circle_img
                    }
                  />
                </TouchableOpacity>
                <Text style={[styles.lightTxtCss]}>All</Text>
                <TouchableOpacity onPress={() => setFilterType('Earned')}>
                  <Image
                    style={styles.crossImgCss}
                    source={
                      filterType === 'Earned'
                        ? images.active_circle_img
                        : images.inactive_circle_img
                    }
                  />
                </TouchableOpacity>
                <Text style={[styles.lightTxtCss]}>Earned</Text>

                <TouchableOpacity onPress={() => setFilterType('Used')}>
                  <Image
                    style={styles.crossImgCss}
                    source={
                      filterType === 'Used'
                        ? images.active_circle_img
                        : images.inactive_circle_img
                    }
                  />
                </TouchableOpacity>
                <Text style={[styles.lightTxtCss]}>Used</Text>
              </View>
              <Text
                style={[
                  styles.txtCss,
                  styles.modalTitleTxtCss,
                  { paddingVertical: ScreenRatio(1.5) },
                ]}
              >
                Duration
              </Text>
              <View style = {{flexDirection:"row",flexWrap:"wrap"}}>
               <View style = {{flexDirection:"row"}}>
                 <TouchableOpacity onPress={() => setTimePeriod('Week')}>
                  <Image
                    style={styles.crossImgCss}
                    source={
                      timePeriod === 'Week'
                        ? images.active_circle_img
                        : images.inactive_circle_img
                    }
                  />
                </TouchableOpacity>
                <Text style={[styles.lightTxtCss]}>This Week</Text>
               </View>
                   <View style = {{flexDirection:"row"}}>
                 <TouchableOpacity onPress={() => setTimePeriod('Month')}>
                  <Image
                    style={styles.crossImgCss}
                    source={
                      timePeriod === 'Month'
                        ? images.active_circle_img
                        : images.inactive_circle_img
                    }
                  />
                </TouchableOpacity>
                <Text style={[styles.lightTxtCss]}>This Month</Text>
               </View>
              </View>

              <View style = {{flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:ScreenRatio(2)}}>
                <View style = {{width :DWidthPercent(40)}}>
                  <Text style = {styles.lightTxtCss}>from</Text>
                  <TouchableOpacity style = {{padding:ScreenRatio(1),borderWidth:1,borderRadius:ScreenRatio(1)}}>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
                <View style = {{width :DWidthPercent(40)}}>
                  <Text style = {styles.lightTxtCss}>To</Text>
                  <TouchableOpacity style = {{padding:ScreenRatio(1),borderWidth:1,borderRadius:ScreenRatio(1)}}>
                    <Text></Text>
                  </TouchableOpacity>
                </View>
              </View>
             
             <View style = {{flexDirection:"row",gap:ScreenRatio(1),margin:ScreenRatio(2)}}>
              <CommonButton text = "Apply" buttonViewCss = {{flex:1}} onPress = {()=>setShowFilter(false)}/>
              <CommonButton text = "Reset" buttonViewCss = {{backgroundColor:colors.C266141,flex:1}} onPress = {()=>setShowFilter(false)}/>
             </View>
            
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  searchBarViewCss: {
    marginHorizontal: ScreenRatio(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.Ceff7f6,
  },
  searchViewCss: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: ScreenRatio(1.2),
    borderRadius: ScreenRatio(3),
    height: ScreenRatio(6),
    backgroundColor: colors.CFFFFFF,
    borderColor: colors.C266141,
  },
  searchImgCss: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode: 'contain',
    marginLeft: ScreenRatio(1),
    tintColor: colors.C266141,
  },
  filterImgCss: {
    height: ScreenRatio(4),
    width: ScreenRatio(4),
    resizeMode: 'contain',
  },
  textInputCss: {
    flex: 1,
    color: colors.C000000,
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(13),
    padding: 0,
    marginHorizontal: ScreenRatio(1),
  },

  orderCategoryViewCss: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: ScreenRatio(1),
  },
  orderTxtViewCss: {
    borderBottomWidth: 2,
    flex: 1,
    paddingVertical: ScreenRatio(1),
    borderBottomColor: colors.CD3DDE7,
  },
  orderTxtCss: {
    color: colors.C132235,
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(12),
  },
  orderInActiveTxtCss: {
    color: colors.C364B63,
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(11.5),
    textAlign: 'center',
  },
  modelViewCss: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  filterModalViewCss: {
    backgroundColor: colors.CFFFFFF,
    paddingHorizontal: ScreenRatio(2),
    paddingVertical: ScreenRatio(2),
    borderTopLeftRadius: ScreenRatio(2),
    borderTopRightRadius: ScreenRatio(2),
  },
  txtCss: {
    fontSize: RFValue(12),
    fontFamily: fonts.nunito_semibold,
    color: colors.C132235,
  },
  lightTxtCss: {
    fontSize: RFValue(12),
    fontFamily: fonts.nunito_regular,
    color: colors.C364B63,
  },
  crossImgCss: {
    height: ScreenRatio(3),
    width: ScreenRatio(3),
    resizeMode: 'contain',
    marginHorizontal: ScreenRatio(1),
    tintColor: colors.C08875D,
  },
  modalTitleTxtCss: {
    fontSize: RFValue(13),
    marginTop: ScreenRatio(0.5),
    fontFamily: fonts.poppins_medium,
  },
});
