<template>
    <div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
export function useOml2d() {
    // const oml2dOptions = useOml2dOptions()
    // 配置可以根据主题的实际情况进行获取，这里写一个默认的
    const oml2dOptions = {
        models: [
            {
                path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
            }
        ]
    };
    onMounted(async () => {
        if (oml2dOptions) {
            const { loadOml2d } = await import('oh-my-live2d');
            loadOml2d(oml2dOptions);
        }
    });
}
</script>

<style lang="scss" scoped></style>