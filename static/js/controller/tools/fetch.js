import Cookie from '../../tools/cookie';
import Host from '../../tools/host';
import Storage from '../../tools/storage';

/*配置引入*/
import Config from '../../config';

function serialize(obj) {
    var result = [];
    if (obj && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]') {
        for (var k in obj) {
            result.push(k + '=' + obj[k]);
        }
        return result.join('&');
    }
    return '';
}

function Fetch(obj) {
    return new Promise(function(resolve, reject) {
        var host = obj.host ? obj.host : Host;
        let projectId = Storage.get('key');
        // obj.param.projectId = projectId == null ? '1' : projectId;
        var param = serialize(obj.param);
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        //myHeaders.append('clientversion', '1.0.0');

        fetch(host + obj.url, {
            method: obj.method,
            // mode: "no-cors",
            headers: myHeaders,
            body: JSON.stringify(param)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            resolve(data);
        })
    })
}


export default Fetch;