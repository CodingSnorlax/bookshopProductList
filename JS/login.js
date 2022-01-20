console.clear()

const app = Vue.createApp({

    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        // 輸入函式
        login() {
            // 串接登入 API
            const url = 'https://vue3-course-api.hexschool.io/v2';

            axios.post(`${url}/admin/signin`, this.user)
                // 回傳成功結果
                .then(res => {
                    const { token, expired } = res.data;
                    document.cookie = `karenzToken=${token}; expires= ${new Date(expired)}; path=/`;
                    window.location = 'backEndPage.html';
                    console.log(token, expired);
                })
                // 回傳失敗結果
                .catch(error => {
                    alert(error.data.message);
                    // console.dir(error); // console.dir (原本不能展開的資訊，可以展開看見)
                })
        }
    },
    // 什麼樣的情況下才需要用 mounted?
    // mounted() {
    // //     // 初始化
    //     this.login()
    // }

})

app.mount('#app')