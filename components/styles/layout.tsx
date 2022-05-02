import {StyleSheet} from 'react-native'
import { scale, moderateScale, verticalScale} from './scaling';


const layout = StyleSheet.create({
    safeAreaView:{ flex: 1},
    heading:{},
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        padding:10,
        backgroundColor: 'transparent'
      },
      separator: {
        marginVertical: verticalScale(10),
        height: 1,
        width: moderateScale(300),
      },
      background:{
        flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
      }

})

export {layout}