const config_data = require('./config/priceconfig.json');

function getPrice(customerType, items){
    var productTypes = ['classic', 'standout', 'premium'];
    var totalPrice = 0;

    for (i in productTypes) {
        if ((items.split(productTypes[i]).length - 1)>0) {
            if (config_data[customerType]['DealFor']!='NA' && productTypes[i]==config_data[customerType]['DealFor']) {
                var count = (items.split(config_data[customerType]['DealFor']).length - 1) - config_data[customerType]['DiscountOf']*Math.floor((items.split(config_data[customerType]['DealFor']).length - 1)/(config_data[customerType]['MinPurchase']+config_data[customerType]['DiscountOf']));
                totalPrice+= config_data[customerType][productTypes[i]] * count;
            } else {
                totalPrice+= config_data[customerType][productTypes[i]] * (items.split(productTypes[i]).length - 1);
            }
        }           
    }   
    console.log('Total price:', totalPrice);
}

module.exports = {
    getPrice
};