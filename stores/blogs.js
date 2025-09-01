export const useBlogs = defineStore("blog-store", {
    state: () => {
        return {
            blogs: [],
            blogcontent: null,
        }
    },

    actions: {
        async getBlogs() {
            const store = useConfig()
            const {data, status} = await useFetch(`${store.baseAPI}/${store.enableLanguage}/blogs`);
            if(status.value == 'success') {
                this.blogs = data.value.blogs
            }
        },

        async getBlogBySlug(slug) {
            const store = useConfig()
            const {data, status} = await useFetch(`${store.baseAPI}/${store.enableLanguage}/blogs/${slug}`);
            if(status.value == 'success') {
                this.blogcontent = data.value.blog;
            }
            else {
                alert("404")
            }
        }   
    }
})