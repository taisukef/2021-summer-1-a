import { Geo3x3 } from 'https://taisukef.github.io/Geo3x3/Geo3x3.js';

// 出ないので...
export function sabae() {
    const sabaeGeo = Geo3x3.decode('E9138732');
    return [
        {
            title: 'めがねミュージアム（めがね会館）',
            pref: '鯖江市',
            author: '',
            place: 'https://www.megane.gr.jp/museum/main/wp-content/uploads/img01.jpg',
            view: 1000000,
            from: '',
            url: 'https://www.megane.gr.jp/museum/',
            authorurl: '',
            geo: {
                ...sabaeGeo,
                exists: true
            }
        },
        {
            title: 'jig.jp',
            pref: '鯖江市',
            author: '',
            // place: 'https://jig.jp/wordpress/wp-content/themes/jig/images/jiglogo_ogp.png',
            place: 'https://jig.jp/wordpress/wp-content/uploads/2014/04/recruit_message_02.jpg',
            view: 1000000,
            from: '',
            url: 'https://jig.jp/',
            authorurl: '',
            geo: {
                ...sabaeGeo,
                exists: true
            }
        },
        {
            title: '鯖江についてもっと知る！',
            pref: '鯖江市',
            author: '',
            place: 'https://www.megane.gr.jp/museum/main/wp-content/uploads/img01.jpg',
            view: 1000000,
            from: '',
            url: 'https://www.city.sabae.fukui.jp/kanko/',
            authorurl: '',
            geo: {
                ...sabaeGeo,
                exists: true
            }
        }
    ];
}
