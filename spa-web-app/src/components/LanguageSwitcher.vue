<!-- LanguageSwitcher.vue -->
<template>
    <button @click="switchLanguage">Switch Language</button>
</template>

  <script>
  import { useI18n } from 'vue-i18n';

  export default {
    setup() {
      const { locale, availableLocales, switchTo } = useI18n();

      const switchLanguage = () => {
        const nextLocale = availableLocales.find(lang => lang !== locale);
        if (nextLocale) {
          switchTo(nextLocale);
        }
      };

      return {
        switchLanguage,
      };
    },
  };
  </script>
  