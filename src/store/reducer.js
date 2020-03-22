import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as homeReducer} from '../pages/home/store';

const image = () => {
    return {
        //列表页随机封面图
        ListImg: [
            {img: require('../statics/images/list_01.png')},
            {img: require('../statics/images/list_02.png')},
            {img: require('../statics/images/list_03.png')},
            {img: require('../statics/images/list_04.png')},
            {img: require('../statics/images/list_05.png')},
            {img: require('../statics/images/list_06.png')},
            {img: require('../statics/images/list_07.png')},
            {img: require('../statics/images/list_08.png')},
            {img: require('../statics/images/list_09.png')},
            {img: require('../statics/images/list_10.png')},
            {img: require('../statics/images/list_11.png')},
            {img: require('../statics/images/list_12.png')},
            {img: require('../statics/images/list_13.png')},
            {img: require('../statics/images/list_14.png')}
        ],
        //首页banner图和内页顶部头图
        bannerList: [
            {img: require('../statics/images/banner-5.jpeg')},
            {img: require('../statics/images/banner-6.jpeg')},
            {img: require('../statics/images/banner-7.jpeg')}
        ],
    }
};

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    image: image
});

export default reducer
