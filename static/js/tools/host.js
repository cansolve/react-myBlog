let host = window.location.protocol + '//' + window.location.host;
let defaultHost = 'http://dev.news.com:8066/newsapi'

// if (ONEMTHost) {
// 	ONEMTHost = /^http/i.test(ONEMTHost) ? ONEMTHost : 'http://' + ONEMTHost;
// 	defaultHost = ONEMTHost;
// 	host = ONEMTHost
// }

const config = {
    // host: Debug ? defaultHost : host
    host: ''
};

export default config.host;