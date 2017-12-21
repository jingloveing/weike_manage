module.exports={
    proxy:{
        '/api': {  //将192.168.1.101印射为/api
            // target: 'http://192.168.1.101/manager', // 接口域名
            target: 'http://www.dxvke.com/manager', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': ''  //需要rewrite的,
            }
        }
    }
}
