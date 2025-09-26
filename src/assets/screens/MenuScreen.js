import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
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

function MenuScreen() {
  const [categoryType, setCategoryType] = useState('Appetizers');
  const [count , setCount] = useState(1)
  const [addQyantity , setAddQyantity] = useState(false)
  const [addToFavourite ,setAddToFavourite] = useState(false)

const menuData = [
  {
    id: 1,
    name: "Indian SpecialThali",
    image: images.f3_img,
    description: "Indian special Thali",
    prepTime: "25 mins",
    rating: 4.6,
    price: 349
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    image: images.f1_img,
    description: "Soft paneer cubes cooked in rich, buttery tomato gravy with Indian spices.",
    prepTime: "20 mins",
    rating: 4.8,
    price: 299
  },
  {
    id: 3,
    name: "Classic Margherita Pizza",
    image:images.pizza_img,
    description: "Freshly baked thin-crust pizza topped with mozzarella cheese and basil leaves.",
    prepTime: "18 mins",
    rating: 4.5,
    price: 399
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    image: images.cake_img,
    description: "Warm chocolate cake with gooey molten center, served with vanilla ice cream.",
    prepTime: "15 mins",
    rating: 4.9,
    price: 199
  }
];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.Ceff7f6 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.transparent}
      />
      <View style={styles.searchBarViewCss}>
        <View style={styles.searchViewCss}>
          <Image style={styles.searchImgCss} source={images.search_img}/>
          <TextInput
            placeholder="Searches for dishes ?"
            placeholderTextColor={colors.C000000}
            style={styles.textInputCss}
          />
        </View>
        {/* <View style = {{flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:ScreenRatio(1),backgroundColor:colors.C08875D,height:ScreenRatio(5),paddingHorizontal:ScreenRatio(1)}}>
          <Image style = {{height:ScreenRatio(3),width:ScreenRatio(3),resizeMode:"contain",right:2}} source={images.checkout_img}/>
          <Text style = {{fontFamily:fonts.nunito_Bold , fontSize:RFValue(12),color:colors.CFFFFFF}}>Checkout</Text>
        </View> */}
      </View>

      <View style={styles.orderCategoryViewCss}>
        <TouchableOpacity
          disabled={categoryType === 'Appetizers' && true}
          onPress={() => setCategoryType('Appetizers')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'Appetizers' && {
              borderBottomColor: colors.C266141,
            },
          ]}
        >
          <Text
            style={[
              styles.orderInActiveTxtCss,
              categoryType === 'Appetizers' && styles.orderTxtCss,
            ]}
          >
            Appetizers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={categoryType === 'Main' && true}
          onPress={() => setCategoryType('Main')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'Main' && { borderBottomColor: colors.C266141 },
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
              categoryType === 'Main' && styles.orderTxtCss,
            ]}
          >
            Main Courses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={categoryType === 'Desserts' && true}
          onPress={() => setCategoryType('Desserts')}
          style={[
            styles.orderTxtViewCss,
            categoryType === 'Desserts' && {
              borderBottomColor: colors.C266141,
            },
          ]}
        >
          <Text
            style={[
              styles.orderInActiveTxtCss,
              categoryType === 'Desserts' && styles.orderTxtCss,
            ]}
          >
            Desserts
          </Text>
        </TouchableOpacity>
      </View>

   <View style = {{flex:1}}>
     <FlatList
    contentContainerStyle = {{gap:ScreenRatio(2),paddingVertical:ScreenRatio(2)}}
    data = {menuData} 
    key={(id)=>id.toString()}
    renderItem={({item})=>{
      return (
          <View style={[styles.menuViewCss,{position:"relative"}]}>
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
            marginTop: ScreenRatio(1),
            marginHorizontal: ScreenRatio(2),
          }}
        >
          <Text style={styles.nameCss}>{item.name}</Text>
        </View>
        <Text numberOfLines={2} style = {[styles.descTxtCss,{  marginHorizontal: ScreenRatio(2),marginVertical:ScreenRatio(.5)}]}>{item.description}</Text>
       <View style = {{flexDirection:"row",alignItems:"center",gap:ScreenRatio(3),marginHorizontal:ScreenRatio(2)}}>
         <Text style = {styles.descTxtCss}>⭐ {item.rating}</Text>
          <View style = {{flexDirection:"row",alignItems:"center"}}>
            <Image source={images.timer_img} style = {{height:ScreenRatio(1.8),width:ScreenRatio(1.8),resizeMode:"contain",marginRight:5}}/>
               <Text style={styles.descTxtCss}>{item.prepTime}</Text>
          </View>
       </View>
         <View style = {{ flexDirection:"row", marginHorizontal:ScreenRatio(2),marginBottom:ScreenRatio(1),justifyContent:"space-between",alignItems:"center"}}>
              <View style = {{flexDirection:"row",alignItems:"center"}}>
            <Image source={images.rupee_img} style = {{height:ScreenRatio(2.3),width:ScreenRatio(2.3),resizeMode:"contain"}}/>
               <Text style={styles.priceCss}>{item.price}</Text>
          </View>
           {addQyantity ? (<View style={styles.addItemsViewCss}>
                          <TouchableOpacity
                            onPress={() =>
                              setCount(prev => {
                                // console.log('subtract', prev);
                                if (prev > 1) {
                                 return prev - 1;
                                }else{
                                    setAddQyantity(false)
                                  return 1
                                }
                              })
                            }
                            style={[
                              styles.countViewCss,
                            ]}
                          >
                            <Image
                              source={images.subtract_img}
                              style={styles.IconCss}
                            />
                          </TouchableOpacity>
                          <Text style={styles.countTxtCss}>{count}</Text>
                          <TouchableOpacity
                            onPress={() =>
                              setCount(prev => prev +1)
                            }
                            style={[
                              styles.countViewCss,
                            ]}
                          >
                            <Image
                              source={images.add_img}
                              style={styles.IconCss}
                            />
                          </TouchableOpacity>
                        </View> ):

                    (<TouchableOpacity onPress={()=>setAddQyantity(true)} style = {{backgroundColor:colors.CFFA400,paddingHorizontal:ScreenRatio(.7),paddingVertical:ScreenRatio(.5),borderRadius:ScreenRatio(.4)}}>
                      <Text style = {{fontFamily:fonts.nunito_Bold , color:colors.CFFFFFF,fontSize:RFValue(12)}}>Add To Cart</Text>
                    </TouchableOpacity>)}
         </View>

         <View style = {{position:"absolute",flexDirection:"row",justifyContent:"space-between",alignItems:"center",right:ScreenRatio(1),left:ScreenRatio(1),top:ScreenRatio(1)}}>
           <View style = {{backgroundColor:"red"}}>
            <Image source={images.red_img} style = {{height:ScreenRatio(2),width:ScreenRatio(2),resizeMode:"contain"}}/>
           </View>
           {/* <TouchableOpacity onPress={()=>setAddToFavourite(!addToFavourite)}>
            <Image source={addToFavourite ? images.active_wishlist :  images.deactive_wishlist} style = {{height:ScreenRatio(3),width:ScreenRatio(3),resizeMode:"contain"}}/>
           </TouchableOpacity> */}
         </View>
      </View>
      )
    }}
    />
   </View>
    </SafeAreaView>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  searchBarViewCss: {
    paddingHorizontal: ScreenRatio(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.Ceff7f6,
  },
  searchViewCss: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginRight: ScreenRatio(1.2),
    borderRadius: ScreenRatio(1),
    height: ScreenRatio(5),
     backgroundColor: colors.CFFFFFF,
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
    fontSize: RFValue(11.5),
  },
  orderInActiveTxtCss: {
    color: colors.C364B63,
    fontFamily: fonts.nunito_regular,
    fontSize: RFValue(11.5),
    textAlign: 'center',
  },
  menuViewCss: {
    width: DWidthPercent(90),
    backgroundColor: colors.CFFFFFF,
    borderRadius: ScreenRatio(1.25),
    elevation: 6,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  nameCss: {
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(13),
    color: colors.C132235,
  },
  priceCss: {
    fontFamily: fonts.nunito_Bold,
    fontSize: RFValue(14),
    color: colors.C000000,
    bottom:1
  },
  descTxtCss :{
     fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(11),
    color: colors.C364B63,
  },
  addItemsViewCss : {    //borderWidth:.5,
    flexDirection: 'row',
    backgroundColor:colors.CFFA600,
    borderRadius:ScreenRatio(.4),

  },
  IconCss: {
    height: ScreenRatio(2),
    width: ScreenRatio(2),
    resizeMode:"contain",
    alignSelf: 'center',
    paddingHorizontal:ScreenRatio(1.2)
  },
  
  countViewCss: {
    backgroundColor: colors.CFF9B08,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  countTxtCss: {
    fontFamily: fonts.nunito_semibold,
    fontSize: RFValue(12),
    color: colors.C000000,
    backgroundColor: colors.CFFE4E4,
     paddingVertical:ScreenRatio(.5),
     paddingHorizontal:ScreenRatio(1.5),
     backgroundColor:colors.CFFE4E4
  },
});
