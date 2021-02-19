<template>
    <div>
        <div class="content">
            <div class="container-fluid">
                <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
                <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
                    <p class="_title0">
                        Tags
                        <Button size="small" type="primary" @click="createModal = true">
                            <Icon type="md-add" /> Create
                        </Button>
                    </p>
                    <Modal v-model="createModal" title="Create a new Tag" :closable="false" :mask-closable="false">

                        <Input v-model="tagName" placeholder="Add a tag name" />


                        <div slot="footer">
                            <Button @click="createModal = false" size="small" type="default">
                                Close
                            </Button>
                            <Button :disabled="isCreating" :loading="isCreating" size="small" type="primary"
                                @click="addTag">
                                {{ isCreating ? 'Adding Tag Name' : 'Create' }}
                            </Button>
                        </div>
                    </Modal>
                    <div class="_overflow _table_div">
                        <table class="_table" v-if="!loading && tags.length">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="tag in tags" :key="tag.id">
                                <td>{{ tag.id }}</td>
                                <td class="_table_name">{{ tag.tag_name }}</td>
                                <td><small>{{ new Date(tag.created_at).toDateString() }}</small></td>
                                <td>
                                    <Button size="small" type="error">Delete</Button>
                                    <Button size="small" type="warning">Edit</Button>
                                </td>
                            </tr>
                        </table>

                        <!-- <Spin fix v-if="loading"></Spin> -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Home",
        props: ["propExample"],
        async created() {
            this.$Loading.start()
            await this._api("GET", "api/tags")
                .then((response) => {
                    this.tags = response.data;
                    this.$Loading.finish()
                })
                .catch((error) => {
                    console.log(error);
                    this.$Loading.finish()
                })
        },
        mounted() {
            // # code here
        },
        data() {
            return {
                // # code here
                createModal: false,
                isCreating: false,
                loading: false,
                tagName: "",
                tags: [],
                cols: [{
                        title: 'Tag Name',
                        key: 'tag_name'
                    },
                    {
                        title: 'Created At',
                        key: 'created_at'
                    },
                    {
                        title: 'Actions',
                        key: 'actions'
                    }
                ],
            }
        },
        methods: {
            async addTag() {
                this.isCreating = true

                await this._api("post", "api/tags/store", {
                        tag_name: this.tagName
                    })
                    .then((response) => {
                        let res = response.data
                        this.isCreating = false
                        if (response.status == 200) {
                            this.createModal = false
                            this.tagName = ''
                            this.tags.unshift(res.tag)
                            this.success(res.success)
                        } else {
                            return this.error(res.errors.tag_name);
                        }
                    })
                    .catch((e) => {
                        this.isCreating = false
                        return this.error(e.errors)
                    })
            },
        },
    }

</script>
