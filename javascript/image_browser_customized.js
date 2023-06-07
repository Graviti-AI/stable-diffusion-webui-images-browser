const ModelDetail = {
    props: ['imageName', 'promptDetail', 'picture'],
    data() {
        return {
            scoreResult: 'Score',
            selectedRate: 0,
            showRateActive: false,
            showImageActive: false,
            currentImage: 'https://picsum.photos/1280/960'
        }
    },
    methods: {
        showCurrentImage() {
            this.currentImage = this.picture;
        },
        showImg() {
            this.showImageActive=true;
        },
        showRate() {
            if (this.scoreResult !== 'Score') return;
            this.showRateActive = true;
        },
        rateSuccess(rate) {
            this.showRateActive = false;
            this.scoreResult = rate;
            this.$buefy.toast.open({
                message: 'Thanks for you Rate!',
                type: 'is-success'
            })
        }
    },
    template: `
        <div class="model-content">
            <section class="model-image">
                <div @click="showImg">
                    <b-image
                        :src="picture"
                        :lazy="false"
                    ></b-image>
                </div>
                
                <div class="model-image-operation">
                    <b-collapse :open="false" aria-id="contentIdForA11y1">
                        <template #trigger="props">
                            <b-button
                                style="width: 30%"
                                type="is-dark"
                                @click="showRate"
                                :aria-expanded="props.open"
                                icon-left="star">
                                {{ scoreResult }}
                            </b-button>
                        </template>
                        <b-rate
                            v-model="selectedRate"
                            v-if="showRateActive"
                            icon-pack="fas" 
                            @change="rateSuccess" 
                        ></b-rate>
                    </b-collapse>
                    <b-button
                        style="width: 30%"
                        type="is-dark"
                        icon-left="download">
                        Download
                    </b-button>
                    <b-button
                        style="width: 30%"
                        type="is-dark"
                        icon-left="delete-alert">
                        Delete
                    </b-button>
                </div>
            </section>
            <section class="model-detail">
                <h1 class="image-title">{{ imageName }}</h1>
                <p class="prompt-title">Prompt Details</p>
                <div class="prompt-details">
                    <div class="prompt-text">
                        <b-icon
                            icon="content-copy"
                            size="is-small">
                        </b-icon>
                        <p>{{ promptDetail }}</p>
                    </div>
                    <div class="button-list">
                        <b-button type="is-dark">txt2img</b-button>
                        <b-button type="is-dark">img2img</b-button>
                        <b-button type="is-dark">inpaint</b-button>
                        <b-button type="is-dark">Extra</b-button>
                        <b-button type="is-dark">ControNet(txt2img)</b-button>
                        <b-button type="is-dark">ControNet(img2img)</b-button>
                    </div>
                </div>
            </section>
            <b-modal v-model="showImageActive">
                <p class="my-image">
                    <img :src="currentImage">
                </p>
            </b-modal>
        </div>
    `
}

function initVueTemplate() {
    new Vue({
        el: '#image-browser-app',
        components: {
            vueWaterfallEasy,
            ModelDetail
        },
        computed: {
            imgContainerHeight() {
                return window.innerHeight + 'px';
            },
        },
        data() {
            return {
                modelProps: {
                    picture: "https://picsum.photos/1280/960",
                    promptDetail: "12342211121121",
                    imageName: "45645645612123.png"
                },
                showModelDetail: false,
                negativePromptFlag: false,
                fieldsList: [
                    { id: 'date', name: 'date'},
                    { id: 'model_hash', name: 'model hash'},
                    { id: 'size', name: 'size'},
                    { id: 'sampler', name: 'sampler'},
                    { id: 'cfg_scale', name: 'cfg scale'},
                    { id: 'ranking', name: 'ranking'},
                    { id: 'seed', name: 'seed'},
                    { id: 'steps', name: 'steps'},
                    { id: 'model', name: 'model'},
                ],
                generateMethod: [],
                generateDate: [],
                scoreFilter: '',
                showFilters: false,
                imgsArr: [
                    {
                        "src": "/components/img/1.jpg",
                        "info": "一些图片描述文字"
                      },
                      {
                        "src": "/components/img/2.jpg",
                        "info": "一些图片描述文字"
                      },
                      {
                        "src": "/components/img/3.jpg",
                        "href": "https://www.baidu.com",
                        "info": "一些图片描述文字"
                      },
                      {
                        "src": "/components/img/4.jpg",
                        "info": "一些图片描述文字"
                      },
                      {
                        "src": "/components/img/5.jpg",
                        "info": "一些图片描述文字"
                      },
                ],
            }
        },
        created() {
        },
        methods: {
           clearFilters() {
                this.generateMethod = '';
                this.scoreFilter = '';
                this.generateDate = [];
           },
           showFilter() {
            this.showFilters = !this.showFilters;
           },
           closeFilter() {
            this.showFilters = false;
           },
           getData() {
            console.log(22222)
           },
           modelClick(event, { index, value }) {
            event.preventDefault();
            this.showModelDetail = true;
            console.log('img clicked', index, value);
          },
          imgErrorFn(imgItem){
            console.log('图片加载错误',imgItem)
          },
        },
        directives: {
            clickOutside: {
                bind (el, binding, vnode) {
                    function documentHandler (e) {
                        const datepickerDom = gradioApp().querySelectorAll('.generate-date');
                        if (el.contains(e.target) || (datepickerDom[1] && datepickerDom[1].contains(e.target))) {
                            return false;
                        }
                        
                        if (binding.expression) {
                            binding.value(e);
                        }
                    }
                    el.__vueClickOutside__ = documentHandler;
                    document.addEventListener('click', documentHandler);
                },
                unbind (el, binding) {
                    document.removeEventListener('click', el.__vueClickOutside__);
                    delete el.__vueClickOutside__;
                }
            }
        }
    })
}

onUiLoaded(
    initVueTemplate
)