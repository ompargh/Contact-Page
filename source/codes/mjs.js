addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ompargh - links</title>
        <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/ompargh/Contact-Page@main/source/logo/rootlogo.png">
        <style>
            body {
                font-family: 'Mahoor-Regular', Arial, sans-serif; 
                background-image: url('https://cdn.jsdelivr.net/gh/ompargh/Contact-Page@main/source/background/rootbackground.jpg');
                background-size: cover;
                text-align: center;
                padding: 50px;
            }
    
            .container {
                background-color: #0085fe;
                padding: 20px;
                border-radius: 25px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: 0 auto;
            }
    
            .logo-container {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                margin-top: 50px;
            }
    
            .logo {
                max-width: 25%; 
                height: auto;
            }
            
            @media (max-width: 767px) {
                
                .logo {
                    max-width: 50%; 
                }
            }
    
            h1 {
                color: #fff;
                margin-top: 10px;
                font-family: 'Typo-Round-Regular', Arial, sans-serif;
                letter-spacing: 2px;
            }
    
            h2 {
                color: #fff;
                font-size: 1.5em;
                margin-top: 5px;
            }
    
            @font-face {
                font-family: 'Mahoor-Regular'; 
                src: url('https://cdn.jsdelivr.net/gh/ompargh/Contact-Page@main/source/fonts/Mahoor%20Regular.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }
    
            @font-face {
                font-family: 'Typo-Round-Regular';
                src: url('https://cdn.jsdelivr.net/gh/ompargh/Contact-Page@main/source/fonts/Typo%20Round%20Regular.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
            }
            .call-button,
            .email-button,
            .telegram-button,
            .instagram-button,
            .youtube-button,
            .twitter-button {
                display: block;
                width: 80%; 
                max-width: 300px; 
                margin: 0 auto 10px; 
                padding: 10px 0; 
                background-color: #fff;
                color: #0085fe;
                text-decoration: none;
                border-radius: 50px;
                font-weight: bold;
                font-size: 20px;
            }
            
            .separator {
                border: 2px solid #fff; 
                width: 50%; 
                margin: 20px auto;
                border-radius: 50px;
            }
            
        </style>
    </head>
    <body>
    <div class="container">
        <div class="logo-container">
            <a href="https://ompargh.ir">
                <img class="logo" src="https://cdn.jsdelivr.net/gh/ompargh/Contact-Page@main/source/logo/rootlogo.png" alt="ompargh Logo" type="image/png">
            </a>
        </div>
        <h1>ompargh</h1>
        <h2>تدوین گر</h2>
        <div class="separator"></div> 
        <div class="link-container">
            <a class="call-button" href="tel:+989352602716" target="_blank">شماره تماس</a>
            <a class="email-button" href="mailto:ompargh@gmail.com" target="_blank">ایمیل</a>
            <a class="telegram-button" href="https://t.me/ompargh" target="_blank">تلگرام</a>   
        </div>
        <div class="separator" style="margin-top: 40px;"></div>
        <a class="instagram-button" href="https://www.instagram.com/ompargh" target="_blank">اینستاگرام</a>
        <a class="youtube-button" href="https://www.youtube.com/@ompargh/featured" target="_blank">یوتوب</a>
        <a class="twitter-button" href="https://twitter.com/ompargh" target="_blank">توییتر</a>
        <div class="separator" style="margin-top: 40px;"></div>
    </div>
    </body>
    </html>  
    `;

    const response = new Response(htmlContent, {
        headers: {
            'Content-Type': 'text/html',
        },
    });

    return response;
}