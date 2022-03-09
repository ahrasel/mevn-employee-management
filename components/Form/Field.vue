<template>
  <div class="form-group">
    <label class="text-black-50" :for="name">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :class="`form-control ${size ? 'form-control-' + size : 'md'}`"
      :placeholder="placeholder"
      @input="$emit('input', $event.target?.value)"
    />
  </div>
</template>

<script setup lang="ts">
// define props
const props = defineProps<FieldProps>()
defineEmits<{
  (e: 'input', v: string | null): void
  (e: 'blur', v: string | null): void
}>()
</script>
