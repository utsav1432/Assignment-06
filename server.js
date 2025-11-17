const http = require('http');

const PORT = 4000;

const app = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.write(`<!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0;">
            <head>
                <title>Home - My Website</title>
            </head>
            <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333; line-height: 1.6;">
                <main class="container" style="padding: 40px 0; min-height: 100%; max-width: 100vw; margin: 0 auto;">
                    <section class="hero" style="background-color: #667eea; color: white; padding: 60px 0; text-align: center;">
                        <h1 style="font-size: 36px; margin-bottom: 20px;">Welcome to Our Website</h1>
                        <p style="font-size: 18px; margin-bottom: 30px;">This is the home page of our simple Node.js web server.</p>
                         <div class="btn-group">
                             <a href="/about" class="btn btn-primary" style="display: inline-block; padding: 10px 20px; text-decoration: none;  border-radius: 4px;  margin: 0 10px; font-weight: bold; background-color: #2c3e50; color: white;">Learn More</a>
                             <a href="/contact" class="btn btn-secondary" style="display: inline-block; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 0 10px; font-weight: bold; background-color: transparent; color: white; border: 2px solid white;">Get in Touch</a>
                         </div>
                    </section>
                </main>
            </body>
        </html>`)
        return res.end();
    } else if (req.url === '/about') {
        res.write(`<!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0;">
            <head>
                <title>Home - My Website</title>
            </head>
            <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333; line-height: 1.6;">
                <main class="container" style="padding: 40px 0; min-height: 100%; max-width: 100vw; margin: 0 auto;">
                    <section class="about-section" style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                        <h1 style="text-align: center;">About Our Company</h1>
                        <p style="text-align: center;">We are a team of passionate developers building amazing web applications with modern technologies.</p>
                        
                        <div class="about-content" style="display: flex; align-items: center; justify-content: center; flex-direction: row; gap: 40px; padding-top: 2rem;">
                            <div class="about-text" style="flex: 2; text-align: center;">
                                <h2>Our Mission</h2>
                                <p>To create innovative solutions that make the web a better place for everyone.</p><br>
                                
                                <h2>What We Do</h2>
                                <ul>
                                    <li>Web Development</li>
                                    <li>Node.js Applications</li>
                                    <li>MERN Stack Projects</li>
                                    <li>API Development</li>
                                </ul>
                            </div>
                            
                            <div class="about-stats" style="flex: 1; display: flex; align-items: center; justify-content: center;">
                                <div class="stat" style="text-align: center; flex-direction:column; padding: 20px; background: #f8f9fa; margin-bottom: 20px; border-radius: 6px;">
                                    <h3 style="font-size: 32px; color: #3498db; margin-bottom: 5px;">50+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div class="stat" style="text-align: center; flex-direction:column; padding: 20px; background: #f8f9fa; margin-bottom: 20px; border-radius: 6px;">
                                    <h3 style="font-size: 32px; color: #3498db; margin-bottom: 5px;">3+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div class="stat" style="text-align: center; flex-direction:column; padding: 20px; background: #f8f9fa; margin-bottom: 20px; border-radius: 6px;">
                                    <h3 style="font-size: 32px; color: #3498db; margin-bottom: 5px;">100%</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>`)
        return res.end();
    } else if (req.url === '/contact') {
        res.write(`<!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0;">
            <head>
                <title>Home - My Website</title>
            </head>
            <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333; line-height: 1.6;">
                <main class="container" style="padding: 40px 0; min-height: 100%; max-width: 100vw; margin: 0 auto;">
                    <section class="contact-section" style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                        <h1 style="text-align: center;">Get In Touch</h1>
                        <p style="text-align: center;">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        
                        <div class="contact-content" style=" display: flex; text-align: center; padding-top: 2rem; gap: 40px;">
                            <div class="contact-form" style="flex: 1; text-align: center;">
                                <h2>Send us a Message</h2>
                                <form style="padding-top: 1rem;">
                                    <div class="form-group" style="margin-bottom: 20px;">
                                        <label for="name" style="display: block; margin-bottom: 5px; font-weight: bold;">Name:</label>
                                        <input type="text" id="name" name="name" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;" required>
                                    </div>
                                    
                                    <div class="form-group" style="margin-bottom: 20px;">
                                        <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
                                        <input type="email" id="email" name="email" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;" required>
                                    </div>
                                    
                                    <div class="form-group" style="margin-bottom: 20px;">
                                        <label for="message" style="display: block; margin-bottom: 5px; font-weight: bold;">Message:</label>
                                        <textarea id="message" name="message" rows="5" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;" required></textarea>
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary" style="display: inline-block; padding: 10px 20px; text-decoration: none;  border-radius: 4px;  margin: 0 10px; font-weight: bold; background-color: #2c3e50; color: white;">Send Message</button>
                                </form>
                            </div>
                            
                            <div class="contact-info" style="flex: 1; padding-top: 1rem;">
                                <h2 style="padding-bottom: 1rem;">Contact Information</h2>
                                <div class="info-item" style="margin-bottom: 25px;">
                                    <h3 style="color: #2c3e50; margin-bottom: 10px;"> Address</h3>
                                    <p>123 Web Street<br>Digital City, DC 12345</p>
                                </div>
                                
                                <div class="info-item" style="margin-bottom: 25px;">
                                    <h3 style="color: #2c3e50; margin-bottom: 10px;"> Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                                
                                <div class="info-item" style="margin-bottom: 25px;">
                                    <h3 style="color: #2c3e50; margin-bottom: 10px;"> Email</h3>
                                    <p>info@mywebsite.com</p>
                                </div>
                                
                                <div class="info-item" style="margin-bottom: 25px;">
                                    <h3 style="color: #2c3e50; margin-bottom: 10px;"> Business Hours</h3>
                                    <p>Monday - Friday: 9AM - 6PM<br>Saturday: 10AM - 4PM</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>`)
        return res.end();
    } else {
        res.write(`<!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0;">
            <head>
                <title>Home - My Website</title>
            </head>
            <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; color: #333; line-height: 1.6;">
                <main class="container" style="padding: 40px 0; margin: 0 auto;">
                    <section class="error-section" style="text-align: center;">
                        <div class="error-content" style="font-size: 40px; color: #e74c3c; margin-bottom: 20px;">
                            <h1>404</h1>
                            <h2 style="font-size: 24px; margin-bottom: 20px; color: #2c3e50;">Page Not Found</h2>
                            <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                            <a href="/home" class="btn btn-primary" style="margin-top: 1rem;">Go Back Home</a>
                        </div>
                    </section>
                </main>
            </body>
        </html>`)
        return res.end();
    }
})

app.listen(PORT, () => {
    console.log("NodeJs server is up and running - http://localhost:4000")
})