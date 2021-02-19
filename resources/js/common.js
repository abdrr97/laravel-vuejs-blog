export default {
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
        info(desc, title = "Hey ") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success(desc, title = "Hey ") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning(desc, title = "Hey ") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error(desc, title = "Hey ") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        },
        error(desc = "Something went wrong! Please try again", title = "Hey ") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
};
