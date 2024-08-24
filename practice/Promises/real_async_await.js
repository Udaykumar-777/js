

const Url_api = "https://api.github.com/users/Udaykumar-777";

async function pr(){
    const data = await fetch(Url_api);
    const dataJson = await data.json();
    console.log(dataJson);
}

pr();