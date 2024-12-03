<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

const { loggedIn } = useUserSession()

// Fetch all tasks
const { data, refresh } = useFetch('/api/tasks')

interface Schema {
  task: string
}

const input = useTemplateRef('input')
const isLoading = ref(false)
const state = reactive<Schema>({
  task: '',
})
async function onSubmit(_event: FormSubmitEvent<Schema>) {
  // Create a new task (double nextTick 🙂)
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <main class="h-screen w-screen px-4 pt-8">
      <div class="max-w-xl mx-auto w-full flex flex-col justify-start items-center gap-4">
        <UAlert
          v-if="!loggedIn"
          variant="soft"
          title="Please login to create a task"
          type="info"
          :actions="[
            {
              label: 'Login',
              href: '/auth/github',
              external: true,
            },
          ]"
        />

        <UCard
          class="w-full"
        >
          <UForm
            :state="state"
            class="w-full"
            @submit="onSubmit"
          >
            <div class="flex flex-row gap-2 items-end">
              <UFormField
                label="Task"
                class="grow"
              >
                <UInput
                  ref="input"
                  v-model="state.task"
                  placeholder="Create a new task"
                  :disabled="!loggedIn"
                  class="w-full"
                />
              </UFormField>

              <UButton
                type="submit"
                aria-label="Create"
                icon="ph-plus-circle"
                square
                :loading="isLoading"
                :disabled="!loggedIn"
              />
            </div>
          </UForm>

          <ol class="mt-4 space-y-2">
            <li
              v-for="task in data"
              :key="task.title"
            >
              {{ task.title }}
            </li>
          </ol>
        </UCard>
      </div>
    </main>
  </div>
</template>
