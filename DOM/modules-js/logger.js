// nếu ko phải là export default thì sd {} để lấy từng export tương ứng
import {TYPE_LOG as log} from './type-const.js';

function logger(msg, type=log){
    console[type](msg);
}

export default logger;