
const options = {
  method: 'GET',
  url: 'https://top-nft-sales.p.rapidapi.com/sales/30d',
  headers: {
    'X-RapidAPI-Key': '432197ffe7msh6cb4cabdc2f3d45p1c78f7jsn7768dab424d5',
    'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com'
  }
};
  
  async function NftUrl(){
   
    let res = await fetch(`https://top-nft-sales.p.rapidapi.com/sales/7d`,options);
    let data = await res.json();
    console.log(data);
    forNft(data);
  }
  
  NftUrl();
  
  function forNft(data){
  
    let td1 = `<tr>
  
  <th style = "text-align: center;">Nft Name</th>
  <th style = "text-align: center;">Collection</th>
  <th style = "text-align: center;">Release Date</th>
  <th style = "text-align: center;">price</th>
  <th style = "text-align: center;">NFT URL</th>
  <th style = "text-align: center;">Collection URL</th>
  
  </tr>`;
  
  
  for(let i = 0; i<40; i++){
  
        td1+= `<tr>
  
    <td>${data[i].nft_name} </td>
    <td>${data[i].collection}</td>
    <td>${data[i].date}</td>
     <td>${data[i].price}</td>
    <td><a href=${data[i].nft_url}>${data[i].nft_url}</a></td>
   <td><a href=${data[i].collection_url}>${data[i].collection_url}</a></td>
    </tr>`;
    
  
    document.getElementById("nft-api-news").innerHTML = td1;
  
  }
  
  }

  async function randomimg(){
   
    let res = await fetch(`https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json`,);
    let ran = await res.json();
    console.log(ran);
    document.getElementById("ran-img").src=ran.url;
    document.getElementById("p-api").style.display="inline-block";
  
  }
  