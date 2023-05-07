<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pantry Pal</title>
    <link href="styles.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>

    <script src="https://kit.fontawesome.com/cfe963e301.js" crossorigin="anonymous"></script>

</head>

<body id="home-page">


<?php
    session_start();
?>
<nav class="p-3 ps-0 pe-0 position-fixed w-100">
    <div class="container-fluid">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="container p-0 d-flex justify-content-start">
                <a href="/" class="text-decoration-none">
                    <h1 class="m-0 text-uppercase nav-title">P<span>P</span></h1>
                </a>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header ms-3 mt-2 d-flex justify-content-end">
                </div>
            </div>
                <?php if(isset($_SESSION['username'])): ?>
                    <li class="d-flex align-items-center justify-content-center dropdown">
                        <a class="dropdown-toggle text-decoration-none ms-3 text-uppercase btn btn-light btn-login" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <?php echo $_SESSION['username']; ?>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Account</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="searchrecipe.php">Saved Recipes</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <form action="logout.php" method="post">
                                    <button type="submit" class="dropdown-item">Logout</button>
                                </form>
                            </li>
                        </ul>
                    </li>
                <?php else: ?>
                    <li class="d-flex align-items-center justify-content-center" id="login-link">
                        <a href="login.html" target="_blank"
                            class="text-decoration-none ms-3 text-uppercase btn btn-light btn-login"
                            id="login-btn">Login</a>
                    </li>
                <?php endif; ?>
            </ul>
        </div>
    </div>
</nav>



    <section id="hero-section">
        <div class="container-fluid px-5  m-0 hero-container d-flex justify-content-center align-items-center">
            <div class="container p-0 d-flex flex-column align-items-center justify-content-center" id="hero-text-container">
                <div class="container p-0 text-center">
                    <h1 class="text-uppercase hero-title">Pantry<span>Pal</span></h1>
                </div>
                <div class="container">
                    <div class="container px-3 text-center">
                        <p class="hero-text text">Our platform allows you to easily select the ingredients you have <span>on hand</span> and instantly generates <span>delicious</span> and <span>creative recipe ideas</span> that will make your taste buds sing.</p>
                    </div>
                    <div class="container">
                        <a href="registration.html" class="btn btn-primary w-100" id="hero-button">Get Started</a>
                    </div>
                </div>
                
            </div>

        </div>
        
    </section>

    <section id="step-section">
        <div class="container-fluid p-5">
            <div class="container p-0 mb-3">
                <h2 class="text-uppercase text-center step-title">How it works</h2>
            </div>

            <div class="container-fluid card-container mb-4">
                <div class="container p-4 pt-0">
                    <div class="container p-0 mb-4 card-image-container">
                        <img src="/assets/card-image.png" class="img-fluid">
                    </div>
                    <div class="container p-0">
                        <h2 class="card-title mb-2 text-center">Choose Your Ingredients</h2>
                    </div>
                    <div class="container p-0">
                        <p class="card-text text-center">Select your ingredients. PantryPal generates recipe suggestions based on what you have on hand.</p>
                    </div>
                </div>
                
                <div class="container p-4 pt-0">
                    <div class="container p-0 mb-4 card-image-container">
                        <img src="/assets/card-image2.png" class="img-fluid">
                    </div>
                    <div class="container p-0">
                        <h2 class="card-title mb-2 text-center">Explore Our Recipes</h2>
                    </div>
                    <div class="container p-0">
                        <p class="card-text text-center">Explore recipes. PantryPal offers a diverse collection of recipe suggestions based on your ingredients. Find the perfect dish to suit your taste and dietary needs.</p>
                    </div>
                </div>
    
                <div class="container p-4 pt-0">
                    <div class="container p-0 mb-4 card-image-container">
                        <img src="/assets/card-image3.png" class="img-fluid">
                    </div>
                    <div class="container p-0">
                        <h2 class="card-title mb-2 text-center">Save Your Recipes</h2>
                    </div>
                    <div class="container p-0">
                        <p class="card-text text-center">With PantryPal, you can easily save the recipes you love for future use. <br><br>This feature allows you to quickly access your favorite dishes and streamline your cooking process. So why wait? Start saving your favorite recipes today with PantryPal!</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="container d-flex justify-content-center">
                    <a href="registration.html" class="btn btn-primary w-50" id="card-button">Get Started</a>
                </div>
            </div>
            

        </div>
    </section>


    <div class="container-fluid footer-container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-0 me-2 mb-md-0 text-light text-decoration-none m-0">
                    P<span class="text-dark m-0">P</span>
                </a>
                <span class="mb-0 mb-md-0 text-light">&copy; 2023 PantryPal</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="text-light" href="#">
                        <i class="fa-brands fa-twitter social-icon"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-light" href="#">
                        <i class="fa-brands fa-instagram social-icon"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-light" href="#">
                        <i class="fa-brands fa-facebook social-icon"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>






</body>

</html>