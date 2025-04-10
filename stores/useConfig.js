export const useConfig = defineStore("configs", {
    state: () => {
        const {locale} = useI18n()
        return {
            isDark: true,
            enableLanguage: locale.value 
        }
    },
    actions: {

    },
    getters: {
        getThemeMode() {
            const savedTheme = localStorage.getItem('theme');
            this.isDark = savedTheme === 'light' ? false : true
        }
    }
})