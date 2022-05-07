const request = require('request-promise');
const cheerio = require('cheerio');


const url = "https://sfbay.craigslist.org/search/sof";

const result = {
    title : "",
    description : "",
    datePosted : "",
    url : "",
    hood : "",
    address : "",
    compension : ""
}


async function scrapeCraiglist(){

    try{

        const html = await request.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        });    
        // console.log(html);
        const $ = await cheerio.load(html);

        $('div.result-info').each((index, element) => {
            console.log($(element).children('.result-heading').text());
        })


    }catch(err){
        console.log(err);
    }

}



scrapeCraiglist();