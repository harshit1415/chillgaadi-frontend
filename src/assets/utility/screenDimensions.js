import { Platform, StatusBar, Dimensions,PixelRatio } from "react-native";
const { height, width } = Dimensions.get("window");
// based on iphone 5s's scale
const scale = width / 320;
const standardLength = width > height ? width : height;

export const DWidth = width;
export const DHeight = height;
export const isIos = Platform.OS=="ios";
export const deviceScreenHeight = Dimensions.get('screen').height;


export const isIphoneX = () => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
}

const deviceHeight = isIphoneX()
    ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
        ? standardLength - StatusBar.currentHeight
        : standardLength;

export function ScreenRatio(percent) {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent+1);
}
export function DWidthPercent(percent) {
  const widthPercent = (percent * DWidth) / 100;
  return Math.round(widthPercent);
}
export function DHeightPercent(percent) {
  const HeightPercent = (percent * DHeight) / 100;
  return Math.round(HeightPercent);
}

export function RFValue(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
}