import axios from "axios";

export default {

    data() {
        return {

        }
    },
    methods: {
        async _api(method, url, data_obj) {
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: data_obj
                })

            } catch (e) {
                return e.response;
            }
        }

    }


}