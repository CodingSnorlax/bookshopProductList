const vm = Vue.createApp({
    data() {
        return {
            tempProduct: {},
            products: [
                {   
                    title: "Diane Arbus: Untitled",
                    author: "Diane Arbus",
                    category: "歐美攝影",
                    size: "211 x 297 mm",
                    ISBN: 9781597111904,
                    date: "2005/6/15",
                    description: "《Untitled》是美國著名攝影師 Diane Arbus 的第三部攝影書，亦是唯一呈現單一計畫的作品。書中影像創作於 Diane Arbus 生前最後兩年，並由身兼作家與記者的長女 Doon Arbus 執筆後記。從 1969 年至 1971 年間，Diane Arbus 在一處收容智能障礙者的療養院持續拍攝。雖然 Arbus 在世時已有意將這項主題下的相片集結付梓，但直到本書於 1995 年問世前，其中的大部分影像都未曾公開亮相。",
                    id: "243434536",
                    is_enabled: true,
                    origin_price: 3600,
                    price: 3234,
                    publisher: "Aperture",
                    productNum: 10,
                    imageUrl: "https://p1-e6eeae93.imageflux.jp/bookobscura/38cc00b31171efcbfd4c.jpeg",
                    imagesUrl: [
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/f5b73da6775f9f9cd41d.jpeg",
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/fbf2b781b161d442d989.jpeg",
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/539945b5b5470b4f0029.jpeg"
                    ]
                },
                {   
                    title: "うたたね",
                    author: "川內倫子",
                    category: "日本攝影",
                    size: "243 x 193 mm",
                    ISBN: 978489815527,
                    date: "2017/3/22",
                    description: "鯉、雲、カラス、カーテン、おじいちゃん、タイヤ、目玉焼き、蟻、蝶など、ただ日常を撮った写真集。なにげない風景、さもすれば見落としてしまいそうな草花や小さな虫たちに目を向ける。川内倫子のカメラを通すと、ただのグラスがキラキラ光る宝石になり、一匹の蟻がスタイリッシュに変身し、鳩の死骸が恐ろしくて近寄れない空気感を漂わせる。やさしさと隣り合わせに存在する怖さ。生と死を強く感じさせる一冊。",
                    id: "5u38u50242890",
                    is_enabled: true,
                    origin_price: 2750,
                    price: 2173,
                    publisher: "リトルモア",
                    productNum: 2,
                    imageUrl: "https://p1-e6eeae93.imageflux.jp/c!/f=webp:auto,a=2,w=500,h=500,b=ffffff00/bookobscura/c481b116ff97e85d8be7.jpeg",
                    imagesUrl: [
                        "https://p1-e6eeae93.imageflux.jp/c!/f=webp:auto,a=2,w=500,h=500,b=ffffff00/bookobscura/c1f4be85b11722a0d329.jpeg",
                        "https://p1-e6eeae93.imageflux.jp/c!/f=webp:auto,a=2,w=500,h=500,b=ffffff00/bookobscura/89acb32764539f7ee7ac.jpeg",
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/b8bcaed973e0fe43fbba.jpeg"
                    ]
                },
                {   
                    title: "William Eggleston's Guide",
                    author: "William Eggleston",
                    category: "歐美攝影",
                    size: "230 x 230 mm",
                    ISBN: 9780870703782,
                    date: "2021/12/23",
                    description: "William Eggleston's Guide was the first one-man show of color photographs ever presented at The Museum of Modern Art, New York, and the Museum's first publication of color photography. The reception was divided and passionate. The book and show unabashedly forced the art world to deal with color photography, a medium scarcely taken seriously at the time, and with the vernacular content of a body of photographs that could have been but definitely weren't some average American's Instamatic pictures from the family album. These photographs heralded a new mastery of the use of color as an integral element of photographic composition. Bound in a textured cover inset with a photograph of a tricycle and stamped with yearbook-style gold lettering, the Guide contained 48 images edited down from 375 shot between 1969 and 1971 and displayed a deceptively casual, actually super-refined look at the surrounding world. Here are people, landscapes and odd little moments in and around Eggleston's hometown of Memphis--an anonymous woman in a loudly patterned dress and cat's eye glasses sitting, left leg slightly raised, on an equally loud outdoor sofa; a coal-fired barbecue shooting up flames, framed by a shiny silver tricycle, the curves of a gleaming black car fender, and someone's torso; a tiny, gray-haired lady in a faded, flowered housecoat, standing expectant, and dwarfed in the huge dark doorway of a mint-green room whose only visible furniture is a shaded lamp on an end table. For this edition of William Eggleston's Guide, The Museum of Modern Art has made new color separations from the original 35 mm slides, producing a facsimile edition in which the color will be freshly responsive to the photographer's intentions.",
                    id: "sdaci3o9doiwcj",
                    is_enabled: false,
                    origin_price: 4290,
                    price: 3980,
                    publisher: "Museum of Modern Art",
                    productNum: 0,
                    imageUrl: "https://p1-e6eeae93.imageflux.jp/bookobscura/948a75ed66bf898b7dd7.jpg",
                    imagesUrl: [
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/dd13ae76f3e0af4def54.jpg",
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/dcd7b134d259b9446929.jpg",
                        "https://p1-e6eeae93.imageflux.jp/bookobscura/6fbdf5d404a6c2178859.jpg"
                    ]
                },
            ]
        }
    }
})
.mount('#app')

