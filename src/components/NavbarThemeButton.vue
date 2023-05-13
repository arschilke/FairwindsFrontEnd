<script setup lang="ts">
import { ref, onMounted } from "vue";

export type UserTheme = "light" | "dark" | "auto";

const getPreferredTheme = (): UserTheme => {
    if (localStorage.getItem("theme") === null) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }
    return localStorage.getItem("theme") as UserTheme;
};

const setTheme = function (theme: UserTheme): void {
    localStorage.setItem("theme", theme);
    userTheme.value = theme;
    themeText.value = `Toggle theme (${theme})`;
    if (
        theme === "auto" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }
};

const changeTheme = function (theme: UserTheme): void {
    const activeTheme = userTheme.value;
    if (activeTheme === theme) {
        return;
    }
    setTheme(theme);

};

const userTheme = ref<UserTheme>(getPreferredTheme());
const themeText = ref<string>("Toggle theme");

onMounted(() => {
    setTheme(userTheme.value);
});
</script>

<template>
    <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center show" id="bd-theme"
        type="button" aria-expanded="true" data-bs-toggle="dropdown" data-bs-display="static" :aria-label="themeText">
        <font-awesome-icon class="my-1 theme-icon-active" v-if="userTheme === 'light'" icon="fa-regular fa-sun" />
        <font-awesome-icon class="my-1 theme-icon-active" v-else-if="userTheme === 'dark'" icon="fa-regular fa-moon" />
        <span class="d-lg-none ms-2" id="bd-theme-text"> {{ themeText }}</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" data-bs-popper="static">
        <li>
            <button type="button" class="dropdown-item d-flex align-items-center" :class="{ active: userTheme === 'light' }"
                @click="changeTheme('light')" data-bs-theme-value="light" v-bind:aria-pressed="userTheme === 'light'">
                <font-awesome-icon class="me-2 theme-icon" icon="fa-regular fa-sun" />
                Light
                <font-awesome-icon :class="{ 'd-none': userTheme !== 'light' }" class="ms-auto" icon="fa-solid fa-check" />
            </button>
        </li>
        <li>
            <button type="button" :class="{ active: userTheme === 'dark' }" v-bind:aria-pressed="userTheme === 'dark'"
                class="dropdown-item d-flex align-items-center" @click="changeTheme('dark')" data-bs-theme-value="dark">
                <font-awesome-icon class="me-2 theme-icon" icon="fa-regular fa-moon" />
                Dark
                <font-awesome-icon class="ms-auto" :class="{ 'd-none': userTheme !== 'dark' }" icon="fa-solid fa-check" />
            </button>
        </li>
    </ul>
</template>
