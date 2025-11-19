const http = require('http');

const PORT = 3000;

const app = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
                 <head>
                    <title>Laundry Services</title>
                    <style>
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body{
                            overflow: hidden;
                        }
                        .navbar{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 16px 32px;
                            background-color: #fff;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                        }
                        
                        .logo{
                            font-weight: 700;
                            font-size: 1.5rem;
                        }
                        
                        .nav-links{
                            list-style: none;
                            display: flex;
                            gap: 24px;
                        }
                        
                        .nav-links li{
                            cursor: pointer;
                            font-family: 400;
                        }

                        .hero{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            height: 100vh;
                            padding: 0 80px;
                            background-color: coral;
                        }
                        
                        .left{
                            max-width: 50%;
                        }
                        
                        .left h1{
                            font-size: 4rem;
                            font-weight: 700;
                            margin-bottom: 16px;
                        }
                        
                        .left span{
                            color: #007bff;
                        }
                        
                        .left p{
                            font-size: 1.5rem;
                            margin-bottom: 24px;
                            line-height: 1.6;
                        }
                        
                        .btn{
                            display: inline-block;
                            background-color: #007bff;
                            color: #fff;
                            text-decoration: none;
                            padding: 16px 32px;
                            border-radius: 8px;
                            font-weight: 500;
                            font-size: 1.5rem;
                        }
                        .right img{
                            width: 800px;
                            max-width: 100%;
                        }
                    </style>
                </head>

                <body>
                    <!-- Navbar -->
                    <nav class="navbar">
                        <div class="logo">Logo</div>
                        <ul class="nav-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
    
                    <!-- Hero Section -->
                    <section class="hero">
                       <div class="left">
                           <h1>Revitalize Your Clothes With Expert <span>Laundry Services!</span></h1>
                           <p>From premium dry cleaning to swift wash and fold, we deliver care and convenience. Schedule a pickup and rediscover the freshness of your clothes today!</p>
                           <a href="/contact" class="btn">Book a service today!</a>
                       </div>
               
                       <div class="right">
                           <img src="https://i.pinimg.com/736x/e4/b1/ae/e4b1ae6126d895d00b238ad673d02019.jpg" alt="Laundry-image">
                       </div>
                    </section>
                 </body>
            </html>`)
        return res.end();
    } else if (req.url === '/about') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
                 <head>
                    <title>Laundry Services - About Us</title>
                    <style>
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body{
                            overflow: hidden;
                        }
                        .navbar{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 16px 32px;
                            background-color: #fff;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                        }
                        
                        .logo{
                            font-weight: 700;
                            font-size: 1.5rem;
                        }
                        
                        .nav-links{
                            list-style: none;
                            display: flex;
                            gap: 24px;
                        }
                        
                        .nav-links li{
                            cursor: pointer;
                            font-family: 400;
                        }

                        .about{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: coral;
                        }

                        .about img{
                           width: 80vw;
                           margin: auto;
                        }
                    </style>
                </head>

                <body>
                    <!-- Navbar -->
                    <nav class="navbar">
                        <div class="logo">Logo</div>
                        <ul class="nav-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>

                    <section class="about">
                        <img src="https://img.freepik.com/premium-vector/about-us_773186-1363.jpg?semt=ais_incoming&w=740&q=80">
                    </section>
                </body>
            </html>`)
        return res.end();
    } else if (req.url === '/contact') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
                 <head>
                    <title>Laundry Services - Contact Us</title>
                    <style>
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body{
                            overflow: hidden;
                        }
                        .navbar{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 16px 32px;
                            background-color: #fff;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                        }
                        
                        .logo{
                            font-weight: 700;
                            font-size: 1.5rem;
                        }
                        
                        .nav-links{
                            list-style: none;
                            display: flex;
                            gap: 24px;
                        }
                        
                        .nav-links li{
                            cursor: pointer;
                            font-family: 400;
                        }

                        .contact{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: coral;
                        }

                        .contact img{
                           width: 80vw;
                           margin: auto;
                        }
                    </style>
                </head>

                <body>
                    <!-- Navbar -->
                    <nav class="navbar">
                        <div class="logo">Logo</div>
                        <ul class="nav-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>

                    <section class="contact">
                        <img src="https://technicalerp.co.uk/wp-content/uploads/2024/03/contact.jpg">
                    </section>
                </body>
            </html>`)
        return res.end();
    } else {
        res.write(`<!DOCTYPE html>
            <html lang="en">
                 <head>
                    <title>Laundry Services - Contact Us</title>
                    <style>
                        *{
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body{
                            overflow: hidden;
                        }
                        .navbar{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 16px 32px;
                            background-color: #fff;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                        }
                        
                        .logo{
                            font-weight: 700;
                            font-size: 1.5rem;
                        }
                        
                        .nav-links{
                            list-style: none;
                            display: flex;
                            gap: 24px;
                        }
                        
                        .nav-links li{
                            cursor: pointer;
                            font-family: 400;
                        }

                        .error{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding: 16px;
                            justify-content: space-between;
                            background-color: coral;
                            max-width: 100%;
                        }
                        
                        .error h1{
                            font-size: 4rem;
                            font-weight: 700;
                            margin-bottom: 16px;
                        }
                        
                        .error span{
                            color: red;
                            padding: 8px;
                            background-color: white;
                        }
                        
                        .error p{
                            font-size: 1.5rem;
                            margin-bottom: 24px;
                            line-height: 1.6;
                        }
                        
                        .btn{
                            display: inline-block;
                            background-color: #007bff;
                            color: #fff;
                            text-decoration: none;
                            padding: 16px 32px;
                            border-radius: 8px;
                            font-weight: 500;
                            font-size: 1.5rem;
                        }
                    </style>
                </head>

                <body>
                    <!-- Navbar -->
                    <nav class="navbar">
                        <div class="logo">Logo</div>
                        <ul class="nav-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>

                    <section class="error">
                       <h1><span>404 error</span></h1>
                       <p>This page doesn't exist!</p>
                       <a href="/home" class="btn">Go Back to Home Page!</a>
                    </section>
                </body>
            </html>`)
        return res.end();
    }
})

app.listen(PORT, () => {
    console.log(`NodeJs server is up and running - http://localhost:3000`)
})