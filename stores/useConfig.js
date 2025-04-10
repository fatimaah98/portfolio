export const useConfig = defineStore("configs", {
    state: () => {
        return {
            isDark: true,
        }
    },
    actions: {

    },
    getters: {
        getThemeMode() {
            console.log("object");
            const savedTheme = localStorage.getItem('theme');
            this.isDark = savedTheme === 'light' ? false : true
        }
    }
})