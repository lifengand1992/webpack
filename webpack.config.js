/**
 * Created by lea on 2017/11/7.
 */
module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool:"eval-source-map", //eval-source-map:在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};