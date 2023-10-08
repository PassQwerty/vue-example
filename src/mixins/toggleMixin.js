export default {
    props:{
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog(){
            this.$emit('update:show', false)
        }
    },
    mounted() {
        // mounted mixin вызывается первым потом идет mounted компонента
        // console.log('mounted mixin')
    },
    // ...
}