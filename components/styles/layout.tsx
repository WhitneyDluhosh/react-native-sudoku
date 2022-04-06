import {StyleSheet} from 'react-native'
import { scale, moderateScale, verticalScale} from './scaling';


const layout = StyleSheet.create({
    safeAreaView:{},
    heading:{},
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      separator: {
        marginVertical: verticalScale(10),
        height: 1,
        width: moderateScale(300),
      },

})

export {layout}