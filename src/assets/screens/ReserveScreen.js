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
import DatePicker from 'react-native-date-picker';
function ReserveScreen(props) {
  const [showdatePicker, setShowDatePicker] = useState(false);
  const [isDate, setIsDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(false);

  const upcomingReservation = [
    { date: '1/10/25', time: '7:00 PM', people: '8', table_no: 15 },
    { date: '1/10/25', time: '7:00 PM', people: '8', table_no: 15 },
    { date: '1/10/25', time: '7:00 PM', people: '8', table_no: 15 },
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
        title="Table Reservation"
        onPress1={() => props?.navigation.navigate('Home')}
      />
   <ScrollView>
     <View style={styles.boxCss}>
        <View style={[styles.flexGapCss, { marginTop: ScreenRatio(0) }]}>
          <Image
            style={{
              height: ScreenRatio(2.5),
              width: ScreenRatio(2.5),
              resizeMode: 'contain',
            }}
            source={images.address_img}
          />
          <Text style={styles.txtCss}>Restaurant Details</Text>
        </View>

        <View style={styles.flexGapCss}>
          <Image style={[styles.editImg]} source={images.address_img} />
          <Text style={styles.txtCss}>123,Downtown City</Text>
        </View>

        <View style={styles.flexGapCss}>
          <Image style={[styles.editImg]} source={images.phone_img} />
          <Text style={styles.txtCss}>123456</Text>
        </View>
        <View style={styles.flexGapCss}>
          <Image style={[styles.editImg]} source={images.phone_img} />
          <Text style={styles.txtCss}>Open: 5:00 PM - 11:00 PM</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={[styles.boxCss, { marginVertical: ScreenRatio(2) }]}
      >
        <Text style={[styles.txtCss, { marginBottom: ScreenRatio(1.5) }]}>
          Make a Reservation
        </Text>
        <Text style={styles.txtCss}>Select Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={[styles.inputViewCss, styles.flexCss]}
        >
          <Image style={styles.editImg} source={images.date_img} />

          <Text style={[styles.txtCss, { marginLeft: ScreenRatio(0.5) }]}>
            {displayDate
              ? `${isDate.getDate()}/${
                  isDate.getMonth() + 1
                }/${isDate.getFullYear()}`
              : 'Select a date'}
          </Text>
        </TouchableOpacity>
        <View
          style={[
            styles.flexCss,
            { gap: ScreenRatio(2), marginVertical: ScreenRatio(1) },
          ]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.txtCss}>Time</Text>
            <TouchableOpacity
              style={[
                styles.inputViewCss,
                styles.flexCss,
                { justifyContent: 'space-between' },
              ]}
            >
              <Text style={styles.txtCss}>Select Time</Text>
              <Image source={images.dropdown_img} style={[styles.editImg]} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.txtCss}>Party Size</Text>
            <TouchableOpacity
              style={[
                styles.inputViewCss,
                styles.flexCss,
                { justifyContent: 'space-between' },
              ]}
            >
              <Text style={styles.txtCss}>Guests</Text>
              <Image source={images.dropdown_img} style={[styles.editImg]} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.txtCss, { marginBottom: ScreenRatio(0.5) }]}>
          Contact Information
        </Text>
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
        <Text style={styles.txtCss}>Special Requests (Optional)</Text>
        <TextInput          
          placeholder="Anniversary,celebrations..."
          placeholderTextColor={colors.C364B63}
          style={[styles.lightTxtCss, styles.inputViewCss]}
        />

        <CommonButton
          text="Reserve Table"
          buttonViewCss={{
            paddingVertical: ScreenRatio(1),
            marginVertical: ScreenRatio(1),
          }}
        />
      </KeyboardAvoidingView>

      <View style={styles.boxCss}>
        <Text style={styles.txtCss}>Upcoming Reservations</Text>
       <FlatList
         scrollEnabled = {false}
       data = {upcomingReservation}
       keyExtractor={(_,index)=>index.toString()}
       renderItem={({item})=>{
        return(
           <View style={{ marginTop: ScreenRatio(1) }}>
          <Text
            style={[
              styles.txtCss,
              {
                marginBottom: ScreenRatio(0.25),
                fontFamily: fonts.nunito_Bold,
              },
            ]}
          >
         {item.date}
          </Text>
          <View style={[styles.flexCss]}>
            <Text
              numberOfLines={2}
              style={[styles.lightTxtCss, { flex: 1 }]}
            >{`${item.time}+${`${item.people} guests`}+${`Table No.${item.table_no}`}`}</Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.lightTxtCss,
                  styles.btnViewCss,
                  { marginHorizontal: ScreenRatio(1.5) },
                ]}
              >
                Confirmed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.lightTxtCss,
                  styles.btnViewCss,
                  { backgroundColor: colors.CFFA600 },
                ]}
              >
                Modify
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        )
       }}
       />

      </View>

        <View style={[styles.boxCss,{marginVertical:ScreenRatio(2)}]}>
        <Text style={styles.txtCss}>Recent Reservations</Text>
       <FlatList
       scrollEnabled = {false}
       data = {upcomingReservation}
       keyExtractor={(_,index)=>index.toString()}
       renderItem={({item})=>{
        return(
           <View style={{ marginTop: ScreenRatio(1) }}>
          <Text
            style={[
              styles.txtCss,
              {
                marginBottom: ScreenRatio(0.25),
                fontFamily: fonts.nunito_Bold,
              },
            ]}
          >
         {item.date}
          </Text>
          <View style={[styles.flexCss]}>
            <Text
              numberOfLines={2}
              style={[styles.lightTxtCss, { flex: 1 }]}
            >{`${item.time}+${`${item.people} guests`}+${`Table No.${item.table_no}`}`}</Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.lightTxtCss,
                  styles.btnViewCss,
                  { marginHorizontal: ScreenRatio(1.5) },
                ]}
              >
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[
                  styles.lightTxtCss,
                  styles.btnViewCss,
                  { backgroundColor: colors.CFFA600 },
                ]}
              >
              Book Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        )
       }}
       />

      </View>
   </ScrollView>

      <DatePicker
        mode="date"
        modal
        open={showdatePicker}
        date={isDate}
        minimumDate={new Date()}
        onConfirm={date => {
          setIsDate(date), setDisplayDate(true), setShowDatePicker(false);
        }}
        onCancel={() => {
          setShowDatePicker(false);
          setDisplayDate(false);
          setIsDate(new Date());
        }}
      />
    </SafeAreaView>
  );
}

export default ReserveScreen;

const styles = StyleSheet.create({
  boxCss: {
    borderWidth: 1,
    borderColor: colors.CE1E6EF,
    padding: ScreenRatio(2),
    borderRadius: ScreenRatio(2),
    backgroundColor: colors.CFFFFFF,
    marginHorizontal: ScreenRatio(2),
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
  btnViewCss: {
    borderRadius: ScreenRatio(1),
    backgroundColor: colors.C266141,
    color: colors.CFFFFFF,
    padding: ScreenRatio(0.7),
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
