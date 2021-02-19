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
                        <table class="_table" v-if="!isLoading && tags.length">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr v-for="tag in tags" :key="tag.id">
                                <td>{{ tag.tag_name }}</td>
                                <td class="_table_name">{{ tag.created_at }}</td>
                                <td>
                                    <Button size="small" type="error">Delete</Button>
                                    <Button size="small" type="warning">Edit</Button>
                                </td>
                            </tr>
                            <!-- ITEMS -->
                        </table>

                        <Spin fix v-if="isLoading"></Spin>

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
            this.isLoading = true
            await this._api("GET", "api/tags")
                .then((response) => {
                    this.tags = response.data;
                    this.isLoading = false
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false
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
                isLoading: false,
                tagName: "",
                tags: []
            }
        },
        methods: {
            async addTag() {
                this.isCreating = true
                if (this.tagName.trim() == "") {
                    this.isCreating = false
                    return this.error('tag name is required')
                }

                await this._api("post", "api/tags/store", {
                        tagName: this.tagName
                    })
                    .then((response) => {
                        let res = response.data
                        this.isCreating = false
                        this.createModal = false
                        this.tags.unshift(res.tag)
                        this.success(res.success)
                    })
                    .catch((error) => {
                        this.isCreating = false
                        return this.error(error)
                    })
            },
        },
    }

</script>
