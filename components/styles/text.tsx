import {StyleSheet} from 'react-native'
import { scale, moderateScale, verticalScale} from './scaling';


const text = StyleSheet.create({
    h1:{
        fontSize: moderateScale(38, 0.4),
        //fontWeight: 'bold',
        textAlign:'center',
        fontFamily:'sans-serif-light'
    },
    h2:{

    },
    subtext:{

    }

})

export {text}