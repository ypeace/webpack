// import './subPageA';
// require.include('./moduleA');
import * as _ from 'lodash';

var page = 'subPageA';


if (page === 'subPageA') {

    // require.ensure(['./subPageA'], function () {
    //     var subPageA = require('./subPageA')
    //     // alert(2);
    // }, 'subpageA');
    import(/*webpackChunkName:'subpageA'*/'./subPageA').then(function (subPageA) {
        console.log(subPageA,'111111')
    })


} else if(page === 'subPageB') {
    // require.ensure(['./subPageB'], function () {
    //     var subPageB = require('./subPageB')
    // }, 'subpageB');
    import(/*webpackChunkName:'subpageB*/'./subPageB').then(function (subPageB) {
        console.log(subPageB,'222222')
    })

}





// import './subPageB';
// import * as _ from 'lodash';不要同步 要异步

// require.ensure(['lodash'], function () {
//     var _ = require('lodash');
//     _.join(['1', '2'], '3')
// }, 'vendor');

export default "pageA";