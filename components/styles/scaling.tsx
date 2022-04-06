import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// desired width filling i.e. margins, padding
const scale = (size:number) => width / guidelineBaseWidth * size;
// potentially for modal or box if cannot use flex to determine height
const verticalScale = (size:number) => height / guidelineBaseHeight * size;
// over all scaling in relation to width size i.e. fonts, widths, margins
const moderateScale = (size:number, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};