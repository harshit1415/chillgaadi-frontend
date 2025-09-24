import Toast from 'react-native-root-toast';
import { RFValue } from '../utility/screenDimensions';
import { fonts } from '../fonts';
import { colors } from '../colors';
export const showToast = (message, type, showDuration) => {
  const col = [
    { color: '#00529B', backgroundcolor: '#BDE5F8' },
    { color: '#4F8A10', backgroundcolor: '#DFF2BF' },
    { color: '#9F6000', backgroundcolor: '#FEEFB3' },
    { color: '#D8000C', backgroundcolor: '#FFD2D2' },
  ];
  let toast = Toast.show(message, {
    backgroundColor: col[type ? type : 0].color,
    textColor: col[type ? type : 0].backgroundcolor,
    duration: showDuration ? showDuration : 5000,
    textStyle: { fontSize: RFValue(11) ,fontFamily:fonts.nunito_Bold ,color:colors.CFFFFFF},
  });
};

const VALIDATE = {
  ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
  Name_WITH_SOME_SPECIAL_CHARA: /^[a-zA-Z '-.\s]*$/,
  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$/,
  MOBILE: /[0-9]$/,
};

export const validation = {
  checkAlphabet: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;

    if (value) {
      if (!VALIDATE.ALPHABET_ONLY.test(value)) {
        showToast(name + ' is Invalid', 3, 1000);
        return false;
      } else if (value.length < min || value.length > max) {
        showToast(`${name} Must_be ${min} to ${max} Characters`, 3, 1000);
        return false;
      }
    } else {
      // value null
      showToast(name + ' Required', 3, 1000);
      return false;
    }
  },
  checkName: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;

    if (value) {
      if (!VALIDATE.Name_WITH_SOME_SPECIAL_CHARA.test(value)) {
        showToast(name + ' is Invalid', 3, 1000);
        return false;
      } else if (value.length < min || value.length > max) {
        showToast(`${name} Must_be ${min} to ${max} Characters`, 3, 1000);
        return false;
      }
    } else {
      // value null
      showToast(name + ' Required', 2, 1000);
      return false;
    }
  },
  chekNumber: (name, min, max, value) => {
    var min = min || 7;
    var max = max || 15;
    if (value) {
      if (!Number.isInteger(Number(value))) {
        showToast(name + ' is invalid.', 3, 1000);
        return false;
      } else if (value.length < min || value.length > max) {
        showToast(
          'Mobile Number Must be ' + min + ' to ' + max + ' Characters',
          3,
          1000,
        );
        return false;
      }
      return true;
    } else {
      showToast(name + ' is required.', 3, 1000);
      return false;
    }
  },
  checkNotNull: (name, min, max, value) => {
    var min = min || 5;
    var max = max || 40;
    if (value) {
      if (value.length < min || value.length > max) {
        showToast(`${name} Must be ${min} to ${max} Characters`, 3, 1000);
        return false;
      }
      return true;
    } else {
      showToast(name + ' Required', 3, 1000);
      return false;
    }
  },

  compare: (message, val, value) => {
    if (value != val) {
      message && showToast(message, 3, 1000);
      return false;
    } else {
      return true;
    }
  },

  checkTrue: (name, value) => {
    console.log(value);
    if (value === false) {
      showToast('Please agree with terms and conditions', 3, 1000);
      return false;
    } else {
      return true;
    }
  },

  isrequire: (name, value) => {
    console.log(value);
    if (!value) {
      showToast(name + 'is require', 3, 1000);
      return false;
    } else {
      return true;
    }
  },
};
