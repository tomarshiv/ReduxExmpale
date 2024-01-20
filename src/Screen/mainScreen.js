import React from 'react-native'
import { View, Text } from 'react-native'
import FirstScreen from './FirstScreen';
import FormData from '../Component/FormData';
import List from '../Component/FlatList';
import ListMap from '../Component/ListMap';
import Grid from '../Component/MakeGridDyanmic';
import FList from '../Component/ComInLoopWithFlatList';
import SecList from '../Component/SectionList';
import Effect from '../Component/UseEffect';
import Toggle from '../Component/ToogleComponent';
import Style from '../Component/FlexSTyle';
import Button from '../Component/Button';
import RadioButton from '../Component/RadioButton';
import DynamicRadioButton from '../Component/DyanmicRadioButton';
import Loder from '../Component/ActivityIndicator';
import ModalBox from '../Component/Model';
import DynamicModal from '../Component/DyanmicModal';
import PressCom from '../Component/Pressableom';
import TopBar from '../Component/StatusBar';
import RootNavigation from '../navigation/RootNavigation';
import BottomTab from '../navigation/BottomTabNavigation';
import Api from '../Api/Api';
import ListApi from '../Api/FlatListApi';


const MainScreen = () => {
    return (
        <View>
            <ListApi />
        </View>
    )
}
export default MainScreen;