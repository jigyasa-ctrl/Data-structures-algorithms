const fetchPollyfill = function(url) {
    return new Promise((resolve, reject) => {
        var client = new XMLHttpRequest();
        client.open("GET", url, true);
        client.onload = function() {
            const response = {
                ok: this.status >= 200 && this.status < 300,
                status: this.status,
                statusText: this.statusText,
                url: this.responseURL,
                text: () => Promise.resolve(this.responseText),
                json: () => Promise.resolve(JSON.parse(this.responseText)),
                xml: () => Promise.resolve(this.responseXML),
              };
              resolve(response);
        }
        client.onerror = () => {
            reject(new Error("Network Error"));
          };
        
        client.send();
    })
}

