import {notification} from 'antd';

const pushNotification = (type, message = '', description = '') => {
    const types = ['success', 'info', 'warning', 'error']
    type = types.indexOf(type) === -1 ? 'info' : type;

    notification[type]({
        message: message,
        description: description,
    });
};

export default pushNotification