export function fetchIcon(url) {
    console.log('fetch url: ', url);
    const request = new Request(url, {
        mode: 'cors',
        method: 'get'
    });
    return fetch(request)
        .then(response => response.blob())
        .then(blob => readBlob(blob))
        .then(stringifiedPage => parseHTML(stringifiedPage))
        .then(domObject => fetchIconLink(domObject))
        .catch(e => {throw e})
}

function readBlob(blob) {
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
    return iconList[0];
}