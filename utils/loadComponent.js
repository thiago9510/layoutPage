 function loadComponent(url, targetSelector, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao carregar ${url}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        document.querySelector(targetSelector).innerHTML = html;
  
        const basePath = url.substring(0, url.lastIndexOf('/'));
        const componentName = basePath.split('/').pop();
  
        // Adiciona CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${basePath}/${componentName}.css`;
        document.head.appendChild(link);
  
        // Adiciona JS
        const script = document.createElement("script");
        script.src = `${basePath}/${componentName}.js`;
        script.onload = () => callback && callback();
        document.body.appendChild(script);
      })
      .catch(error => {
        console.error(error);
      });
  }
  