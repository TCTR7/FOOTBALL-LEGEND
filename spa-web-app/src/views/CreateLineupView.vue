<template>
  <FileUploadNormal />
</template>
<script>
// import { ref } from 'vue';
import FileUploadNormal from "@/components/file_upload/FileUploadNormal.vue"
export default {
  components: {
    FileUploadNormal
  },
  setup() {

    const onFileUploadClickHandle = () => {
      document.getElementById("uploadFile").click();
      console.log("onFileUploadClickHandle")
    }

    const onUploadFileChangeHandle = (event) => {
      console.log("onUploadFileChangeHandle: ", event.target.files)
    }

    return {
      onFileUploadClickHandle,
      onUploadFileChangeHandle
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../public/assets/scss/common.scss";

.upload-wrapper {
  height: 100%;
  width: 100%;
  background-color: #dedcdc;

  .file-upload-container {
    border: 1px solid #cccccc67;
    flex-direction: column;
    text-align: left;
    padding: 20px;
    font-weight: 600;

    .fu-subitem {
      margin: 3px;
    }

    .file-upload-title {
      color: $main-color;
      font-size: 24px;
    }

    .file-upload-desc {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.527);
    }

    .file-upload-main-content {
      min-width: 90%;
      min-height: 80%;
      border: 2px dashed black;
      border-radius: 4px;
      background-color: white;
      padding: 50px auto;
      text-align: center !important;
      flex-direction: column;

      .drag-drop-intro {
        font-size: 16px;
        color: black;
        margin: 20px 0px 10px 0px;
      }

      .upload-button {
        margin-bottom: 20px;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid $main-color;

        &:hover {
          cursor: pointer;
        }

        .upload-icon {
          width: 50px;
        }

        span {
          white-space: pre;
        }
      }
    }

    .file-upload-information {
      color: $main-color;
    }
  }
}
</style>