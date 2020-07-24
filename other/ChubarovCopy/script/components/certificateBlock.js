Vue.component('certificate-item', {
    props: ['certificate'],
    template: `
        <div class="card m-3" style="width: 18rem;">
            <img v-bind:src="this.$srcCertificate+certificate.id+'.jpg'" class="card-img-top" 
                 @click="loadViewer(certificate, this.$srcCertificate+certificate.id+'.jpg')">
            <div class="card-body">
                <p class="card-text">{{certificate.description}}</p>
            </div>
        </div>`,
    methods: {
        loadViewer(item, src) {
            console.log(src)
            this.$emit('load-viewer', item, src)
        }
    }
});

let certificate = new Vue({
    el: "#certificate",
    data: {
        certList: certificateList

    },
    methods: {
        loadViewer(item, src) {
            console.log(src)
            viewer.loadViewer(item, src);
        }
    }
});