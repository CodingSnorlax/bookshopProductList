const vm = Vue.createApp({
    data() {
        return {
            // 串接 API 及個人 API Path
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'karen666',
            products: [],
            tempProduct: {},
        }
    },
    methods: {
        checkAdmin(){
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
            .then(() => {
                this.getData()
            })
            .catch((error) => {
                alert(error.data.message);
                window.location = 'login.html';
            })
        },
        getData(){
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
            .then(res => {
                this.products = res.data.products;  
            })
            .catch(error => {
                alert(error.data.message)
            })
        },
        checkDetailProductInfo(item){
            this.tempProduct = item;
        }

    },
    mounted() {
        // 取得 Token（Token 僅需要設定一次）
        const myToken = document.cookie.replace(/(?:(?:^|.*;\s*)karenzToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // 發送請求，也會同步執行驗證的 token
        axios.defaults.headers.common['Authorization'] = myToken;

        this.checkAdmin()
    },
})

vm.mount('#app')

