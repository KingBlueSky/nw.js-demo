/*
 @name: read.js
 @description: ��ȡ��ҳ���������ݹ��ߺ���
 @date: 2015/10/17
 @author: Nero(Nero@nero-zou.com)
 */
var Read = _Read();
function _Read() {
    var Read = {};
    var node_read = require('node-read');
    Read.getPage = getPage;

    /**
     * ��ȡ��ҳ����
     * @param url
     */
    function getPage(url) {

        return new Promise(function (resolve, reject) {
            node_read(url, function (err, article, res) {

                if(err){
                    reject(err);
                    return;
                }

                resolve(article);

            });
        });

    }

    return Read;
}