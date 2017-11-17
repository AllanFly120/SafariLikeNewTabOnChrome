export async function fetchIcon(url) {
    const request = new Request(url);
    return fetch(request).then(response => 
        response.blob
    )
}

const blob = await fetchIcon('https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website');
const reader = new FileReader();
reader.onload() = function(event) {
    console.log(event.target.result);
}
reader.readAsText(blob);