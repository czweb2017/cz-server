<template>
    <section class="container">
        <div>
            <!-- <logo/> -->
                            <el-row>
                    <img
                        src="/logo.png"
                        alt="click refresh"
                        class="logo"
                    >
                </el-row>
            <h1 class="title">cz-server</h1>
            <h2 class="subtitle">a personal server</h2>
            <no-ssr>
                <el-row>
                    <h3 class="icon-title">WarCraft III Icon</h3>
                </el-row>
                <el-row>
                    <img
                        :src="imgPath"
                        alt="click refresh"
                        class="icon"
                    >
                </el-row>
                <el-row>
                    <el-button
                        @click="refreshRandomWar3Icon"
                        class="btn"
                        type="primary"
                    >random</el-button>
                </el-row>
                <el-row>
                    <a
                        :href="imgPath"
                        download
                    >
                        <el-button class="btn">download</el-button>
                    </a>
                </el-row>
            </no-ssr>
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import axios from 'axios';

export default {
    components: {
        Logo
    },
    data() {
        return {
            imgPath: 'war3icon/AttributeBonus.png'
        };
    },
    methods: {
        refreshRandomWar3Icon() {
            axios
                .get('/war3icon')
                .then(response => {
                    if (response.status === 200) {
                        this.imgPath = response.data.path;
                    }
                })
                .catch(err => console.log(err));
        },
        downloadRandomWar3Icon() {
            axios
                .get('/war3icon')
                .then(response => {
                    if (response.status === 200) {
                        this.imgPath = response.data.path;
                        // this.imgPath = 'war3icon/02d948a75ee59d96d04358b2.jpg';
                    }
                })
                .catch(err => console.log(err));
        }
    }
};
</script>

<style lang="less" scoped>

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-image: url('/bg.jpg');
        background-size: cover; 
    }

    .icon-title {
        color: #fff;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
            BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
            sans-serif;
        display: block;
        font-weight: 300;
        font-size: 24px;
        color: #e4f1ff;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 16px;
        color: #aaaaaa;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    .logo {
        width: 80%;
    }
    .icon {
        margin: 0 auto;
    }

    .btn {
        margin-top: 10px;
        width: 100px;
    }

</style>
