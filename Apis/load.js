
    const myForm = document.getElementById("blank");
    const formData = new FormData(myForm);
let jsonObject = {};

for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
}
const sendHttp = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response);
            }
            else{
            resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject('Something wrong');
        }
        xhr.send(JSON.stringify(data));
    });
    return Promise;
};
const getData = () => {
    
sendHttp('POST', 'http://127.0.0.1:1338/').then(res =>{
    console.log(res);
});
};

const sendData = () => {    
    sendHttp('POST', 'http://127.0.0.1:1338/', jsonObject).then(res => {
    console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

};
    
document.getElementById("Submit").addEventListener('click', sendData);
document.getElementById("List").addEventListener('click', getData);