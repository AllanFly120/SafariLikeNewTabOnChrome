export function fetchIcon(url) {
    console.log('fetch url: ', url);
    const request = new Request(url, {
        mode: 'no-cors',
        method: 'GET',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'text/plain'
        })
    });
    try {
        // const response = await fetch(request);
        // console.log('fetchResult: ', response);
        // const blob = await response.blob();
        // const domObj = parseHTML(await readBlob(blob));
        return 'foo';
    } catch (e) {
        throw e;
    }
        // .then(response => {
        //     console.log(response.blob());
        //     return response.blob();
        // })
        // .then(blob => readBlob(blob))
        // .then(stringifiedPage => parseHTML(stringifiedPage))
        // .then(domObject => fetchIconLink(domObject))
        // .catch(e => {throw e})
}

function readBlob(blob) {
    console.log('page: ', blob);
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            resolve(event.target.result);
        }
        reader.onerror = function (event) {
            reject(event);
        }
        reader.readAsText(blob);
    })
}

function parseHTML(stringifiedPage) {
    if (window.DOMParser){
        const parser = new DOMParser();
        return parser.parseFromString(stringifiedPage, 'text/xml');
    } else {
        throw new Error('No DOMParser Available');
    }
    
}

function fetchIconLink(domObj) {
    if (domObj && domObj.documentElement) {
        const iconList = domObj.documentElement.querySelectorAll('head link[rel*="icon"]');
        if (iconList && iconList.length > 0) {
            return chooseBestIcon(iconList);
        } else {
            return '../../assets/icon.png';
        }
    } 
    return '../../assets/icon.png'; 
}

function chooseBestIcon(iconList) {
    //TODO
    console.log(iconList[0]);
    return iconList[0];
}