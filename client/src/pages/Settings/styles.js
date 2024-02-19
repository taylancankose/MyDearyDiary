import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../assets/colors/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    innerContaier:{
        margin: 15
    }
});
