<template>
  <ThemeProvider>
    <NaiveUIProvider>
      <DefaultLayout>
        <NuxtLayout>
          <NuxtPage />
          <NuxtPwaManifest />
        </NuxtLayout>
      </DefaultLayout>
      <VideoTogetherProvider />
    </NaiveUIProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 熔岩番剧库 LavaAnimeLib`
      : "熔岩番剧库 LavaAnimeLib";
  },
});

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.locale("zh-cn");
dayjs.extend(updateLocale);
dayjs.updateLocale("zh-cn", {
  calendar: {
    lastDay: "[昨天] HH:mm",
    sameDay: "[今天] HH:mm",
    nextDay: "[明天] HH:mm",
    lastWeek: "[上周]dd HH:mm",
    nextWeek: "[下周]dd HH:mm",
    sameElse: "YYYY-MM-DD HH:mm",
  },
});

usePageLifeCycle().setPageMount();
window.addEventListener("click", () => {
  usePageLifeCycle().addClickCount();
});
</script>
