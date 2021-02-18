
<template>
  <div>
    <div class="content">
      <div class="container-fluid">
        <!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
        <div
          class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20"
        >
          <p class="_title0">
            Tags
            <Button size="small" type="primary" @click="modal = true">
              <Icon type="md-add" /> Create
            </Button>
          </p>
          <Modal
            v-model="modal"
            title="Create a new Tag"
            :closable="false"
            :mask-closable="false"
          >
            <div slot="footer">
              <Button size="small" type="default" @click="modal = false">
                Close
              </Button>
              <Button size="small" type="primary"> Create </Button>
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
    // # code here
  },
  mounted() {
    // # code here
  },
  data() {
    return {
      // # code here
      modal: false,
    };
  },
  methods: {
    methodExample() {
      // # code here
    },
  },
};
</script>