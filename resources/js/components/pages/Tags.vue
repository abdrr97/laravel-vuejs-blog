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
                        <table class="_table">
                            <!-- TABLE TITLE -->
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            <!-- TABLE TITLE -->

                            <!-- ITEMS -->
                            <tr>
                                <td>1</td>
                                <td class="_table_name">Tag Name</td>
                                <td>
                                    <Button size="small" type="error">Delete</Button>
                                    <Button size="small" type="warning">Edit</Button>
                                </td>
                            </tr>
                            <!-- ITEMS -->
                        </table>
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
        created() {

        },
        mounted() {
            // # code here
        },
        data() {
            return {
                // # code here
                createModal: false,
                isCreating: false,
                tagName: "",
            };
        },
        methods: {
            addTag() {
                this.isCreating = true;
                if (this.tagName.trim() == "") {
                    this.isCreating = false;
                    return this.error('tag name is required')
                }

                this._api("post", "api/create_tag", {
                        tagName: this.tagName
                    })
                    .then((response) => {
                        console.log(response.data);
                        this.isCreating = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
    };

</script>
