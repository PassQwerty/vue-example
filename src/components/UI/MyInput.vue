<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    font-size: .9rem;
    width: 100%;
    border: 1px solid var(--green);
    border-radius: 8px;
    padding: 10px 10px;
    outline:none;
}
.input:focus{
    box-shadow: 0px 0px 3px var(--green);
}
</style>