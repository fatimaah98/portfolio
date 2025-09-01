export const useProject = defineStore("project-store", {
    state: () => {
        const config = useConfig();
        return {
            projects: null,
            api: config.baseAPI,
        }
    },

    actions: {
        async getProjects() {
            const {status, data} = await useFetch(`${this.api}/en/projects`);
            if(status.value == "success") {
                this.projects = data.value;
                console.log("object: ", this.projects);
            }
        }
    }
})