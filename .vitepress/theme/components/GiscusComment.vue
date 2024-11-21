<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="PvZ2CNDIY/docs"
            repoid="R_kgDONSsPmw"
            category="General"
            categoryid="DIC_kwDONSsPm84Ckeai"
            mapping="pathname"
            term="留下你的意见!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            :theme="isDark ? 'dark' : 'light'"
            :key="route.path"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute, useData } from 'vitepress';

const route = useRoute();
const { isDark } = useData();
</script>