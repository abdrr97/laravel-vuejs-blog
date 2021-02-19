export default {
    created() {
        this.$Loading.config({
            height: 6
        });
    },
    data() {

        return {};
    },
    methods: {
        async _api(method, url, data_obj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: data_obj
                });
            } catch (e) {
                return e.response;
            }
        },
        info(desc, title) {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success(desc, title) {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning(desc, title) {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error(desc, title) {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        error(desc = "Something went wrong! Please try again", title) {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
};
