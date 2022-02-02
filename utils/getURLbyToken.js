const request = require('./request');

module.exports = async(token) => {
    const result = await request(`https://api.vk.com/method/apps.get?access_token=${token}&app_id=6121396&v=5.131`);
    

    const { mobile_iframe_url } = result.response.items[0];

    if (!mobile_iframe_url){
console.log(
            'Токен нужно получить от приложения "VK Admin", ладно, буду дальше работать. Наслаждайся :)'
        );
    }

    return mobile_iframe_url;
};
