const zlib = require('zlib');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
module.exports = {
    devServer: {
        host: 'parkspot.localhost',
    },
    productionSourceMap: false, //  Setting this to false can speed up production builds if you don't need source maps for production.
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            return {
                devtool: 'source-map',
                // ! pre-render code
                plugins: [
                    new PrerenderSPAPlugin({
                        // Absolute path to compiled SPA
                        staticDir: path.resolve(__dirname, './dist'),
                        // List of routes to prerender
                        routes: [
                            '/about',
                            '/contact',
                            '/features',
                            '/faq',
                            '/blog',
                            '/blog/Eliminating%20Traffic%20jams%20in%20India!',
                            '/blog/Parking%20Challenges%20in%20Office%20Area!',
                            '/blog/NO%20Parking',
                            '/bangalore/parking-near-BTM',
                            '/bangalore/parking-near-Adugodi',
                            '/bangalore/parking-near-Ashoknagar',
                            '/bangalore/parking-near-Banashankari',
                            '/bangalore/parking-near-Bharathinagar',
                            '/bangalore/parking-near-Bommanahalli',
                            '/bangalore/parking-near-Byappanahalli',
                            '/bangalore/parking-near-Byatarayanapura',
                            '/bangalore/parking-near-Chandra-Layout',
                            '/bangalore/parking-near-Chikkajala',
                            '/bangalore/parking-near-City-Market',
                            '/bangalore/parking-near-Commercial-Street',
                            '/bangalore/parking-near-Devanahalli',
                            '/bangalore/parking-near-Electronic-City',
                            '/bangalore/parking-near-Gangammanagudi',
                            '/bangalore/parking-near-Girinagar',
                            '/bangalore/parking-near-HSR-Layout',
                            '/bangalore/parking-near-Hennur',
                            '/bangalore/parking-near-High-Ground',
                            '/bangalore/parking-near-Hulimavu',
                            '/bangalore/parking-near-Indiranagar',
                            '/bangalore/parking-near-JC-Nagar',
                            '/bangalore/parking-near-JP-Nagar',
                            '/bangalore/parking-near-Jalahalli',
                            '/bangalore/parking-near-Jayanagar',
                            '/bangalore/parking-near-Jeevan-Bima-Nagar',
                            '/bangalore/parking-near-Kadugodi',
                            '/bangalore/parking-near-Kalasipalya',
                            '/bangalore/parking-near-Kamakshipalya',
                            '/bangalore/parking-near-Kempapura-Agrahara',
                            '/bangalore/parking-near-Kempegowda-International-Airport',
                            '/bangalore/parking-near-Kengeri',
                            '/bangalore/parking-near-Kodigehalli',
                            '/bangalore/parking-near-Konanakunte',
                            '/bangalore/parking-near-Koramangala',
                            '/bangalore/parking-near-Mahadevapura',
                            '/bangalore/parking-near-Malleshwarm',
                            '/bangalore/parking-near-Marathahalli',
                            '/bangalore/parking-near-Mico-Layout',
                            '/bangalore/parking-near-Sadashivanagar',
                            '/bangalore/parking-near-Srirampuram',
                            '/bangalore/parking-near-Subramanyapura',
                            '/bangalore/parking-near-Vijayanagar',
                            '/bangalore/parking-near-Whitefield',
                            '/bangalore/parking-near-Yelahanka',
                            '/bangalore/parking-near-Kengeri-Gate',
                            '/bangalore/parking-near-Chickpet',
                            '/bangalore/parking-near-Yalahanka',
                            '/hyderabad/parking-near-hyderabad',
                            // '/bangalore/parking-near-Subramanyanagar',
                            // '/bangalore/parking-near-Halasoor',
                            // '/bangalore/parking-near-Halasoor-Gate',
                            // '/bangalore/parking-near-HAL',
                            // '/bangalore/parking-near-Amrutha-Halli',
                            // '/bangalore/parking-near-Annapoorneshwari-Nagar',
                            // '/bangalore/parking-near-Bagalgunte',
                            // '/bangalore/parking-near-Banasawadi',
                            // '/bangalore/parking-near-Bande-Palya',
                            // '/bangalore/parking-near-Basavanagudi',
                            // '/bangalore/parking-near-Basavanagudi-women-PS',
                            // '/bangalore/parking-near-Basaveshwara-Nagar',
                            // '/bangalore/parking-near-Beguru',
                            // '/bangalore/parking-near-Bellanduru',
                            // '/bangalore/parking-near-Bhagalur',
                            // '/bangalore/parking-near-CK-Achukattu',
                            // '/bangalore/parking-near-Chamarajapet',
                            // '/bangalore/parking-near-CottenPet',
                            // '/bangalore/parking-near-Cubbon-Park',
                            // '/bangalore/parking-near-DJ-Halli',
                            // '/bangalore/parking-near-Hanumanthanagar',
                            // '/bangalore/parking-near-Hebbal',
                            // '/bangalore/parking-near-Jagajeevanram-Nagar',
                            // '/bangalore/parking-near-Jnanabharathi',
                            // '/bangalore/parking-near-KG-Halli',
                            // '/bangalore/parking-near-KG-Nagar',
                            // '/bangalore/parking-near-KR-Puram',
                            // '/bangalore/parking-near-Kothanuru',
                            // '/bangalore/parking-near-Kumarswamy-layout',
                            // '/bangalore/parking-near-Madivala',
                            // '/bangalore/parking-near-Magadi-Road',
                            // '/bangalore/parking-near-Mahalaxmi-Layout',
                            // '/bangalore/parking-near-Nandini-Layout',
                            // '/bangalore/parking-near-Parappana-Agrahara',
                            // '/bangalore/parking-near-Peenya',
                            // '/bangalore/parking-near-Pulakeshinagar',
                            // '/bangalore/parking-near-Puttenahalli',
                            // '/bangalore/parking-near-RMC-Yard',
                            // '/bangalore/parking-near-RT-Nagar',
                            // '/bangalore/parking-near-Rajajinagar',
                            // '/bangalore/parking-near-Rajarajeswarinagar',
                            // '/bangalore/parking-near-Rajgopal-Nagar',
                            // '/bangalore/parking-near-Rama-Murthy-Nagar',
                            // '/bangalore/parking-near-SG-Palya',
                            // '/bangalore/parking-near-SJ-Park',
                            // '/bangalore/parking-near-SR-Nagar',
                            // '/bangalore/parking-near-Sampigehalli',
                            // '/bangalore/parking-near-Sanjaynagar',
                            // '/bangalore/parking-near-Shankarapurm',
                            // '/bangalore/parking-near-Sheshadripuram',
                            // '/bangalore/parking-near-Shivaji-Nagar',
                            // '/bangalore/parking-near-Siddapura',
                            // '/bangalore/parking-near-Soladevanahalli',
                            // '/bangalore/parking-near-Talaghattapura',
                            // '/bangalore/parking-near-Thilaknagar',
                            // '/bangalore/parking-near-Upparpet',
                            // '/bangalore/parking-near-VV-Puram',
                            // '/bangalore/parking-near-Varthur',
                            // '/bangalore/parking-near-Vidhana-Soudha',
                            // '/bangalore/parking-near-Vidyaranyapura',
                            // '/bangalore/parking-near-Viveknagar',
                            // '/bangalore/parking-near-Vyalikaval',
                            // '/bangalore/parking-near-Wilson-Garden',
                            // '/bangalore/parking-near-Women-PS',
                            // '/bangalore/parking-near-Yelahanka-New-Town',
                            // '/bangalore/parking-near-Yeshwanthapura',
                            // '/bangalore/parking-near-Cubbonpark',
                            // '/bangalore/parking-near-V.V.Puram',
                            // '/bangalore/parking-near-J.C.-Nagar',
                        ],

                        // * If some thing goes wrong then
                        // todo: In the Vue.config.js file, make headless to false. By default,
                        // todo: it comes false, but in case you have turned it to true then make it false.
                    }),
                ],
            };
        }
    },
    // compression code
    pluginOptions: {
        compression: {
            brotli: {
                filename: '[file].br[query]',
                algorithm: 'brotliCompress',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                minRatio: 0.8,
            },
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            },
        },
    },
};
