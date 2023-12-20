<template>
  <div class="upload-wrapper box-center">
    <div class="file-upload-container box-center">
      <p class="file-upload-title fu-subitem">{{ $t('file_upload') }}</p>
      <p class="file-upload-desc fu-subitem">{{ $t('file_upload_support_type') }}</p>
      <DropZone @files-dropped="addFiles">
        <div class="file-upload-main-content fu-subitem box-center">
          <pre class="drag-drop-intro">{{ $t('drag_drop_intro') }}</pre>
          <div class="upload-button box-center" @click="onFileUploadClickHandle">
            <input type="file" multiple id="uploadFile" style="display:none;" @change="onUploadFileChangeHandle" />
            <font-awesome-icon :icon="['fa', 'upload']" class="upload-icon" />
            <span>{{ $t('browse_file') }}</span>
          </div>
        </div>
      </DropZone>
      <p class="fu-subitem" v-show="!files.length">{{ $t('no_file_attached') }}</p>
      <ul class="file-upload-information fu-subitem" v-show="files.length">
        <FilePreview v-for="file in files" :key="file.id" :file="file" :tag="li"/>
      </ul>
    </div>
  </div>
</template>
<script>
import DropZone from '@/components/file_upload/DropZone.vue'
import useFileList from "./file-list"
import FilePreview from "@/components/FilePreview.vue"
export default {
  components: {
    DropZone,
    FilePreview
  },
  setup() {
    const { addFiles, files } = useFileList()
    const onFileUploadClickHandle = () => {
      document.getElementById("uploadFile").click();
      console.log("onFileUploadClickHandle")
    }

    const onUploadFileChangeHandle = (event) => {
      console.log("onUploadFileChangeHandle: ", event.target.files)
      addFiles(event.target.files)
      event.target.value = null
    }

    return {
      onFileUploadClickHandle,
      onUploadFileChangeHandle,
      addFiles,
      files
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../public/assets/scss/common.scss";

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
      width: 100%;
      align-self: left;
      color: $main-color;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>