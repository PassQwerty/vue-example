<template>
    <div class="dialog" v-if="show === true" @click="hideDialog">
        <div @click.stop class="dialog_Content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
    mounted() {
        // mounted mixin вызывается первым потом идет mounted компонента
        // console.log('mounted component')
    },
}
</script>

<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;

    display: flex;
}

.dialog_Content{
    margin: auto;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    min-height: 10rem;
    min-width: 22rem;
}

</style>
