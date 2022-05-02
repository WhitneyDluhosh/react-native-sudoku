import {StyleSheet} from 'react-native'
import { scale, moderateScale, verticalScale} from './scaling';
import { useThemeColor } from '../Themed';


const buttons = StyleSheet.create({
    startButton:{
       flexDirection:'column',
       justifyContent:'flex-start',
       paddingVertical: 10,
       width: moderateScale(200, 0.4),
       paddingHorizontal: 20,
       borderRadius:5,
       margin:10,
       
     
    },
    buttonText:{
        fontSize: moderateScale(28, 0.4),
        textAlign:'center',
        textTransform: 'uppercase',
        fontFamily:'sans-serif-light',
    }
    

})

export {buttons}