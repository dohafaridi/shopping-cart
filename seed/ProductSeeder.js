/**
 * this file wil be run manually by NodeJs the purpose,
 * is to create a collection / documents for the shopping-bag app.
 *
 * @type {*|exports|module.exports}
 */

var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping', { useMongoClient: true, promiseLibrary: global.Promise });

var products = [
    new Product({
        imagePath: 'http://media.moddb.com/images/articles/1/233/232591/15050686003a28e6e6df64dad07606fb.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!',
        price: 10
    }),
    new Product({
        imagePath: 'http://assets1.ignimgs.com/2016/11/30/100thewalkingdeadseasonone1920jpg-6c613f_1024w.jpg',
        title: 'The Walking Dead: Season One',
        description: 'The first thing I did once I finished The Walking Dead’s devastating Season 1 finale was pull then-IGN Editor Greg Miller into a room to talk about it.',
        price: 10
    }),
    new Product({
        imagePath: 'http://assets1.ignimgs.com/2016/11/30/99advancewars1920jpg-36b6ca_640w.jpg',
        title: 'Advance Wars',
        description: 'Don’t let its cheerful aesthetic fool you - Advance Wars is one of the greatest turn-based tactics games ever created.',
        price: 10
    }),
    new Product ({
        imagePath: 'http://assets1.ignimgs.com/2016/11/30/98perfectdark1920jpg-36b6c9_640w.jpg',
        title: 'Perfect Dark',
        description: 'Rare’s excellent N64 follow-up to the insanely-popular GoldenEye was yet another hit first-person shooter.',
        price: 10
    }),
    new Product ({
        imagePath: 'http://assets2.ignimgs.com/2016/11/30/93icojpg-6c613c_1024w.jpg',
        title: 'Ico',
        description: 'Ico could have easily scared a lot of players off when it launched on the PlayStation 2 back in 2001.',
        price: 10
    }),
    new Product ({
        imagePath: 'http://assets1.ignimgs.com/2016/11/30/76dmc3jpg-36b6d3_1024w.jpg',
        title: 'Devil May Cry 3: Dante\'s Awakening',
        description: 'After a big misstep with Devil May Cry 2, the franchise’s future rested squarely on the shoulders of Devil May Cry 3, and it turned out to be exactly what the series needed.',
        price: 10
    })
];

// Insert products to the DB, note the save an async function.
products.map((product, index) => {
    product.save();

    if(index === products.length) {
        mongoose.disconnect();
    }
});