import {StyleSheet} from 'react-native'
import { scale, moderateScale, verticalScale} from './scaling';


const text = StyleSheet.create({
    h1:{
        fontSize: moderateScale(20, 0.4),
        fontWeight: 'bold',
    },
    h2:{

    },
    subtext:{

    }

})

export {text}