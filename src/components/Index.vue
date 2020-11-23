<template>
    <dv-full-screen-container>
        <dv-loading>数据加载中...</dv-loading>
    </dv-full-screen-container>
</template>

<script>
export default {
  name: 'HelloWorld',
    data () {
        return {
            loading: true,
            config: {
                header: ['列1', '列2', '列3'],
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ]
            },
            chartConfig:{
                data: [
                    {
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ],
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                unit: '单位',
                showValue: true
            }
        }
    },
    created(){
        setTimeout(this.clearLoading, 1);
    },
    methods: {
      clearLoading(){
          this.loading = false
      },
        // 更新数据的示例方法
        updateHandler () {
            this.config = { ...this.config }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,body{
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }


</style>
