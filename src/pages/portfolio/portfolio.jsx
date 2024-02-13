import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

export function Portfolio(){
    const isMobile = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

       if(isMobile){
        useGSAP(() => {
            gsap.to(".images", { y:15,ease: "power1.in",stagger:0.1,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }else{
        useGSAP(() => {
            gsap.to(".images", { y:40,ease: "power1.in",delay:0.1,stagger:0.2,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }

    
    return (
        <section id="portfolio">
            <h2>Selected projects</h2>
           
            <div id='' className='portfolioCont'>
                <h2>portrait</h2>
                <div className='imgCont'>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5607a923e4b02ca27d321d51/1601004110095-9LHJYXPGVYT4SG44M0D4/Miwa-200904-98_websize.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743025040-GY3HNPD08I794TTR7O1M/image-asset.jpeg'/>
                </div>
                </div>
            </div>
            

            <div className='portfolioCont'>
            <h2>children/maternity</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://momlovesbest.com/wp-content/uploads/2019/12/Maternity-Photo-Shoot-Ideas-scaled.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://neyssalee.com/wp-content/uploads/2023/01/Seattle_snoqualmie_family_photographer_neyssa_lee__3190-scaled.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://mamabumprentals.com/wp-content/uploads/Willa-2-1.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>landscapes </h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2022/11/08110007/Mountain-landscapes2-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>weddings</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://johnstowncastle.ie/wp-content/uploads/sites/4/2023/07/JC-240_websize-1024x683.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://media.glamourmagazine.co.uk/photos/64c77e65d026779dc4c97d5a/master/pass/LEIGH%20ANNE%20PINNOCK%20310723%20default.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://static01.nyt.com/images/2023/12/31/multimedia/REVAMPED-WEDDING-TRENDS-01-pfct/REVAMPED-WEDDING-TRENDS-01-pfct-superJumbo.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/576eda4e1b631b13f3e07992/1633052441409-YNFGMFMNEC5EJ36HCNXZ/SD+Wedding89.JPG?format=1000w'/>
                </div>
                <div className='images'>
                    <img src='https://www.sharynhodges.com/wp-content/uploads/2022/02/heather-brad-kay-and-monty-wedding-sharyn-hodges-photography-949-683x1024.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/59a81a2059cc6896042f5ce7/1634676111828-Z18KP7Q4LO7PST2RVHZ7/DSC_4237.JPG'/>
                </div>
            </div>
            </div>
        </section>
    )
}