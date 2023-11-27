<template>
<div class="wrapper-field">
    <VTextField v-model="value" :label="label" :placeholder="placeholder" :outlined="true" class="custom-text-field no-ripple" />
</div>
</template>

  
  
<script>
import {
    VTextField
} from 'vuetify/lib'

export default {
    name: 'TextField',
    components: {
        VTextField,
    },
    props: {
        value: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        dense: {
            type: Boolean,
            default: false,
        },
    }
}
</script>
  
  
<style scoped>
.custom-text-field .v-text-field {
    background-color: transparent;
    box-shadow: none;
    border: 1px solid var(--neutral-outline, #C7CCD1);
    padding: 0;
    height: 40px;
}

.v-text-field--outlined,
.v-text-field--solo {
    border-radius: 8px;
}

.custom-text-field .v-text-field__slot input {
    background-color: transparent;
    border: none;
    padding: 0;
    height: 40px;
}

.custom-text-field.no-ripple .v-text-field__ripple {
    display: none;
}

.custom-text-field.no-ripple .v-input__slot:before,
.custom-text-field.no-ripple .v-input__slot:after {
    display: none;
}

.wrapper-field {
    width: 317px;
}
</style>
