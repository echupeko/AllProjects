Vue.component('certificate-item', {
    props: ['certificate'],
    template: `
        <div class="card m-3" style="width: 18rem;">
            <img v-bind:src="certificate.src" class="card-img-top" @click="loadViewer(certificate)">
            <div class="card-body">
                <p class="card-text">{{certificate.description}}</p>
            </div>
        </div>`,
    methods: {
        loadViewer(item) {
            this.$emit('load-viewer', item)
        }
    }
});

let certificate = new Vue({
    el: "#certificate",
    data: {
        certList: certificateList
    },
    methods: {
        loadViewer(item) {
            viewer.loadViewer(item);
        }
    }
});