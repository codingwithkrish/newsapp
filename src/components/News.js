import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class news extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Herman Mostert",
            "title": "Proteas legend AB de Villiers retires from all cricket",
            "description": "Legendary former Proteas batsman and captain AB de Villiers has retired from all cricket with immediate effect.",
            "url": "https://www.news24.com/sport/cricket/proteas/proteas-legend-ab-de-villiers-retires-from-all-cricket-20211119",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/9970/67e44818862b4ecba66127ee2c037915.jpg",
            "publishedAt": "2021-11-19T09:32:36+00:00",
            "content": "Legendary former Proteas batsman and captain AB de Villiers has retired from all cricket with immediate effect.\r\nThe 37-year-old made the announcement on his official Twitter account on Friday.\r\n\"It … [+2537 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Australia cricket captain Paine resigns after ‘sexting’ scandal",
            "description": "Cricket Australia accepts Tim Paine’s resignation, which comes just weeks before the Ashes series with England.",
            "url": "http://www.aljazeera.com/news/2021/11/19/australia-cricket-captain-paine-resigns-after-sexting-scandal",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2010/07/2010724112655764580_5.jpeg?fit=309%2C206",
            "publishedAt": "2021-11-19T08:09:25Z",
            "content": "Tim Paine has quit as Australian Test cricket captain over an explicit private text exchange with a female colleague a bombshell announcement just weeks before the Ashes series begins against archriv… [+2759 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Dean Bilton",
            "title": "Tim Paine's scandal and resignation as Australian cricket captain a shock four years in the making",
            "description": "Cricket fans were taken aback when news of Tim Paine's indiscretions and resignation broke, but Cricket Australia probably wasn't — and that is much of the problem, Dean Bilton writes.",
            "url": "http://www.abc.net.au/news/2021-11-19/tim-paine-resignation-scandal-cricket-australia-shock/100635448",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/ce637b14dfbf9de8390ceb0c12b71e89?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=189&width=862&height=485",
            "publishedAt": "2021-11-19T06:53:04Z",
            "content": "For cricket fans, the news came disarmingly out of the blue.\r\nStill safely in the sleepy preparation stage before the men's cricket summer properly began, there was about half an hour of warning that… [+5271 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Tom Kershaw",
            "title": "Azeem Rafiq apologises after historical antisemitic text messages emerge",
            "description": "The former cricketer ‘deeply ashamed’ for remarks and is a ‘different person today’",
            "url": "http://www.independent.co.uk/sport/cricket/azeem-rafiq-texts-antisemitism-b1960238.html",
            "urlToImage": "https://static.independent.co.uk/2021/11/15/16/newFile-8.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2021-11-18T18:25:49Z",
            "content": "Azeem Rafiq has issued an apology after a text message conversation emerged in which he used antisemitic slurs when discussing another cricketer in 2011.\r\nRafiqs testimony to a parliamentary select c… [+2462 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Jackson Cole",
            "title": "Azeem Rafiq ‘ashamed’ as ex-Yorkshire cricketer issues apology for using anti-Semitic language in messages...",
            "description": "",
            "url": "https://talksport.com/sport/cricket/985181/azeem-rafiq-apology-racist-messages-yorkshire/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2021/11/NINTCHDBPICT000694115443.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            "publishedAt": "2021-11-18T17:50:03Z",
            "content": "Azeem Rafiq has apologised for using racial slurs in an exchange of messages with another cricketer. \r\nThe former Yorkshire cricketer, 30, sent shockwaves in the sport with his testimony in front of … [+3719 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hELLO I aM A CONSTRUCTOR FROM NEWS COMPONENT ")
        this.state = {
            articles:this.articles,
            loading:false
       }
    }
    render() {
        return (
            <div className="container my-3">
        <h2>NewsAp- Top Headlines </h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title} description={element.description} urltoima={element.urlToImage} newsurl={element.url} />
           
                    </div>
            })}

         
        
         
        </div>
                  
               

            </div>
        )
    }
}

export default news
