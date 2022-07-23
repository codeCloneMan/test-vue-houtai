<template>
    <div class="wrapper" style="height: 100%;">
        <el-container style="height: 100%;">
            <el-aside width="auto">
                <common-aside></common-aside>
            </el-aside>
                <el-container>
                    <el-header>
                        <common-header></common-header>
                    </el-header>
                        <common-tag />
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
        </el-container>

    </div>
</template>

<script>
import commonAside from '../src/components/CommonAside.vue'
import commonHeader from '../src/components/CommonHeader.vue'
import commonTag from '../src/components/CommonTag.vue'

export default {
    name: 'Home',
    components: {
        commonAside,
        commonHeader,
        commonTag
    },
    data () {
        return {}
    }
}
</script>

<style lang="less" scoped>
.el-header{
    background-color: #333;
}
.el-main{
    padding: 10px;
}
</style>