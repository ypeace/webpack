import * as _ from 'lodash';

var page = 'subPageB';
alert(2);

if (page === 'subPageA') {
    import(/*webpackChunkName:'subpageA'*/'./subPageA').then(function (subPageA) {
        console.log(subPageA,'3333')
    })

} else if(page === 'subPageB') {

    import(/*webpackChunkName:'subpageB*/'./subPageB').then(function (subPageB) {
        console.log(subPageB,'44444')
    })
}

export default "pageB";