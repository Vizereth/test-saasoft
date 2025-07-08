<script setup lang="ts">
import { ref, reactive, watch, onMounted, computed } from "vue";
import { NForm, NFormItem, NInput, NSelect, NButton } from "naive-ui";
import type { FormRules } from "naive-ui";
import { v4 as uuidv4 } from "uuid";
import type { AccountFormType } from "../types/account";

const props = defineProps<{ initialData?: Partial<AccountFormType> }>();
const formRef = ref();

const defaultForm = {
  id: uuidv4(),
  rawLabels: "",
  labels: [],
  type: "Локальная",
  login: "",
  password: null,
  isValid: false,
};

const form = reactive<AccountFormType>({
  ...defaultForm,
  ...props.initialData,
});

const selectTypeOptions = [
  { label: "LDAP", value: "LDAP" },
  { label: "Локальная", value: "Локальная" },
];

const validationRules = computed<FormRules>(() => ({
  login: {
    required: true,
    trigger: ["blur"],
  },
  password:
    form.type === "Локальная" ? { required: true, trigger: ["blur"] } : {},
}));
</script>

<template>
  <n-form
    :model="form"
    ref="formRef"
    class="account-form"
    label-placement="top"
    :rules="validationRules"
  >
    <n-form-item label="Метки" path="rawLabels">
      <n-input v-model:value="form.rawLabels" maxlength="50"></n-input>
    </n-form-item>
    <n-form-item label="Тип записи" path="type">
      <n-select
        v-model:value="form.type"
        :options="selectTypeOptions"
      ></n-select>
    </n-form-item>
    <n-form-item label="Логин" path="login" :show-feedback="false">
      <n-input v-model:value="form.login" maxlength="100"></n-input>
    </n-form-item>
    <n-form-item
      v-if="form.type === 'Локальная'"
      label="Пароль"
      path="password"
      :show-feedback="false"
    >
      <n-input
        v-model:value="form.password"
        type="password"
        show-password-on="click"
        maxlength="100"
      ></n-input>
    </n-form-item>
    <n-button type="error" text class="account-form__del-btn">Удалить</n-button>
  </n-form>
</template>

<style lang="scss">
.account-form {
  display: flex;
  gap: 10px;

  .n-form-item-feedback-wrapper {
    display: none;
  }

  &__del-btn {
    display: flex;
    align-items: flex-end;
    padding: 0 0 15px 0;
  }

  &:not(:first-of-type) {
    .n-form-item {
      grid-template-rows: 1fr;
    }

    label {
      height: 0px;
      max-height: 0px;
      min-height: 0px;
      padding: 0px;
      visibility: hidden;
    }
  }
}
</style>
