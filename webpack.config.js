/**
 * Created by lea on 2017/11/7.
 */
module.exports = {
    entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: __dirname + "/public",//�������ļ���ŵĵط�
        filename: "bundle.js"//���������ļ����ļ���
    },
    devtool:"eval-source-map", //eval-source-map:�ڿ����׶�����һ���ǳ��õ�ѡ��������׶���һ����Ҫ�������ѡ��
    devServer: {
        contentBase: "./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
        historyApiFallback: true,//����ת
        inline: true//ʵʱˢ��
    }
};