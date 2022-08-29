const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '755fd20a8fmsh37e4f4363d1a71bp1c4f0bjsnb2174633616a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
	.then(response => response.json())
    .then(data => {
        const item = data.items;
        const section = document.getElementById('section');
        item.forEach(mainData => {
            console.log(mainData);
            const div = document.createElement('div');
            div.classList.add('box');
            if (mainData.snippet?.thumbnails?.medium?.url === undefined) {
            div.style.display = 'none'

            }
            else {
            div.innerHTML = `
                <div class = "img">
                    <img src = "${mainData?.snippet?.thumbnails?.medium?.url}">
                </div>
                <div class = "text">
                    <h5>${mainData.snippet?.title}</h5>
                    <h6>${mainData.snippet?.channelTitle}</h6>
                    <p>${mainData.snippet?.publishTime.slice(0 , 10)}</p>
                </div>
            `
                section.appendChild(div)
            }

        });
    } )
	.catch(err => console.error(err));