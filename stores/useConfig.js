export const useConfig = defineStore("configs", {
    state: () => {
        const {locale} = useI18n()
        return {
            isDark: true,
            enableLanguage: locale.value, 
            baseAPI: "https://api.fatemeh-nassari.ir/api/v1",
            languages: [
                {name: "Persian 🇮🇷 ", code: 'fa'}, 
                {name: "Arabic 🇦🇪 ", code: 'ar'}, 
                {name: "English 🇬🇧 ", code: 'en'}
            ],
            description: {},
            linkedin: '',
            github: '',
            appVersion: 'v1.0.3',
            tabs: [
                {name: 'Index', route: '/'},
                {name : 'Projects', route: '/projects'},
                {name: 'Blogs', route: '/blogs'},
                {name: 'Services', route: '/'},
                {name: 'Contact', route: '/contact-us'}
            ],
            currentTab: useRoute().name?.toString().split("__")[0]
        }
    },
    actions: {
        async getHomeData() {
            const {data, status} = await useFetch(`${this.baseAPI}/${this.enableLanguage}/home`);
            if(status.value == 'success') {
                data.value.forEach(item => {
                    this.description[item.lang] = item.description
                });
                this.linkedin = data.value[0].linkedin;
                this.github = data.value[0].github;
            }
        }
    },
    getters: {
        getThemeMode() {
            const savedTheme = localStorage.getItem('theme');
            this.isDark = savedTheme === 'light' ? false : true
        }
    }
})