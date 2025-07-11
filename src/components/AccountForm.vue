<script setup lang="ts">
import { ref, reactive, watch, computed } from "vue";
import { NForm, NFormItem, NInput, NSelect, NButton } from "naive-ui";
import { TrashIcon } from "@heroicons/vue/24/outline";
import type { FormRules } from "naive-ui";
import type { AccountFormType } from "../types/account";
import { useAccountStore } from "../stores/accountStore";
import { parseLabels } from "../utils/parseLabels";

const accountStore = useAccountStore();
const props = defineProps<{ initialData: AccountFormType }>();
const formRef = ref();

const form = reactive<AccountFormType>({
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

watch(
  form,
  (updatedForm) => {
    accountStore.updateAccount({ ...updatedForm });
    console.log(updatedForm);
  },
  { deep: true, immediate: true }
);

watch(
  () => form.rawLabels,
  (updatedLabels) => {
    form.labels = parseLabels(updatedLabels);
  }
);

watch(
  () => form.type,
  (newType) => {
    if (newType === "LDAP") {
      form.password = null;
    }
  }
);
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
      <n-input
        v-model:value="form.rawLabels"
        maxlength="50"
        placeholder="Значение"
      ></n-input>
    </n-form-item>
    <n-form-item label="Тип записи" path="type">
      <n-select
        v-model:value="form.type"
        :options="selectTypeOptions"
      ></n-select>
    </n-form-item>
    <n-form-item label="Логин" path="login" :show-feedback="false">
      <n-input
        v-model:value="form.login"
        maxlength="100"
        placeholder="Значение"
      ></n-input>
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
        placeholder="Значение"
      ></n-input>
    </n-form-item>
    <n-button
      type="error"
      text
      class="account-form__del-btn"
      @click="() => accountStore.removeAccount(form.id)"
      ><TrashIcon
    /></n-button>
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
    padding: 0 0 7px 0;
    @include hover-opacity;

    svg {
      width: 20px;
      height: 20px;
    }
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
