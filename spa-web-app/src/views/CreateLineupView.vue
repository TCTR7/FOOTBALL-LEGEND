<template>
    <input type="file" />
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
    const fileInput = ref(null);

    const openFileExplorer = () => {
      // Kiểm tra xem thẻ input đã được tạo chưa
      if (fileInput.value) {
        // Mở cửa sổ Explorer
        fileInput.value.click();
        console.log("openFileExplorer   : ", fileInput.value)
      }
    };

    return {
      fileInput,
      openFileExplorer,
    };
  },
}
</script>
<style lang="scss" scoped>
.file-upload {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.file-upload .file-upload__area {
    width: 600px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    margin-top: 40px;
}
</style>