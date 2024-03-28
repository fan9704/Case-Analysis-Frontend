# Equipment Frontend

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Includes [vue-router](https://router.vuejs.org/) and [Pinia](https://pinia.vuejs.org/) [^1].

In addition, [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/) are also included and are set to be executed automatically at runtime and commit. (Since these settings are set strictly, please relax yourself.)

Also, when the development server is executed, it is checked in real time by [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker).

First define `VITE_APP_TITLE` in your `.env` file.

## Commands

It is designed to be close to [create-vue](https://github.com/vuejs/create-vue-templates/tree/main/typescript-router-pinia-vitest) commands.

| Command       | Description                                            |
| ------------- | ------------------------------------------------------ |
| dev           | Start devserver.                                       |
| clean         | Clear devserver cache.                                 |
| type-check    | Check vue markup.                                      |
| lint          | Run ESLint and prettier.                               |
| lint:style    | Run Stylelint.                                         |
| test          | Run vitest                                             |
| test:unit     | Run Unit test                                          |
| coverage      | Output Coverage Report.                                |
| build         | Build for production.                                  |
| build:analyze | Execute Bundle Analyzer                                |
| build:clean   | Clear production build files.                          |
| build-only    | Build for production without checking. For Deploy use. |
| preview       | Run the program generated by the production build.     |

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

[^1]: [Pinia](https://pinia.vuejs.org/) is the recommended state management library to replace [Vuex](https://vuex.vuejs.org/) in the next Vue. see <https://github.com/vuejs/rfcs/discussions/270#discussioncomment-2066856>
