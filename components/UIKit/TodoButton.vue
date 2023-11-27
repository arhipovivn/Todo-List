<template>
<v-btn :color="color" :disabled="disabled" @click="onClick" class="custom-button">
    <slot></slot>
</v-btn>
</template>

  
  
<script>
export default {
    name: 'TodoButton',
    props: {
        color: {
            type: String,
            default: "primary"
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick() {
            // Действия, выполняемые при клике на кнопку
        }
    }
}
</script>
  
  
<style scoped>
.custom-button {
    border: none;
    box-shadow: none;
    text-transform: none;
    font-weight: normal;
}
.theme--light.v-btn.v-btn--has-bg {
    background-color: #2578F4;
    border-radius: 8px;

    display: flex;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 4px;}
</style>
