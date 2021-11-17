var vm = new Vue({
    el: "#app",
    data: {
        theme: {
            dark: {
                backgroundColor: "#000000"
            },
            light: {
                backgroundColor: "#ffffff"
            },
        },
        currentTheme: localStorage.getItem("theme") || "",
    },
    methods: {
        setTheme: function () {
            if (this.currentTheme) {
                localStorage.setItem("theme", this.currentTheme)
            }
        }
    },
})