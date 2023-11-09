function getRespuesta() {
    fetch("https://yesno.wtf/api")
      .then((response) => response.json())
      .then((data) => {
        const gif = data.image;
        const body = document.getElementById("body");
        body.style.backgroundImage = `url(${gif})`;
        document.body.appendChild(body);
      });
  }

  
  