export const useProject = defineStore("project-store", {
    state: () => {
        const config = useConfig();
        return {
            projects: null,
            api: config.baseAPI,
            project: null
        }
    },

    actions: {
        async getProjects() {
            const {status, data} = await useFetch(`${this.api}/en/projects`);
            if(status.value == "success") {
                this.projects = data.value;
                console.log("object: ", this.projects);
            }
        },

        async getProjectBySlug(slug) {
            const store = useConfig();
            const {data, status} = await useFetch(`${store.baseAPI}/${store.enableLanguage}/projects/${slug}`);
            if(status.value == 'success') {
                this.project = data.value;
            }
        }
    }
})