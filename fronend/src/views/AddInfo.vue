<template>
  <div class="edit-form">
    <h4>Thêm phim</h4>
    <infoListForm
      :info="info"
      @info-submit="addInfo"
      @info-delete="resetInfo"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import InfoService from "../services/info.service";
import infoListForm from "../components/infoListForm";
export default {
  name: "AddInfo",
  components: {
    infoListForm,
  },
  data() {
    return {
      info: {
        title: "",
        illustrator: "",
        nation: "",
        type: "",
        num_episodes: "",
        vietsub: false,
        compendious: "",
      },
      message: "",
    };
  },
  methods: {
    async addInfo(data) {
      console.log("input: ", data);
      const [error, response] = await this.handle(InfoService.create(data));
      if (error) {
        console.log(error);
      } else {
        console.log(response.data);
        this.message = "Phim được thêm thành công.";
      }
    },
    resetInfo() {
      alert("reset");
    },
  },
  mounted() {
    this.message = "";
  },
};
</script>
<style>
.edit-form {
  max-width: 400px;
  margin: auto;
}
</style>