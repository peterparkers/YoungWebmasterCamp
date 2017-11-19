<?php include 'apiData.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>List</title>
    <link rel="stylesheet" href="css/style1.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Prompt" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bubbler+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Chelsea+Market" rel="stylesheet">
    <link href="fonts/font-awesome.min.css" rel="stylesheet"/>
    <script src="jquery-3.2.1.min.js"></script>
</head>
<body>
    <img src="img/top.png" id="top" onclick="toTopOfPage()" width="50px"></img>
    <!--Header-->
    <header>
        <article>
            <a href="file.php"><img src="img/logo.png" width="100px"></img></a>
        </article>
        <aside>
            <ul>
                <li><a href="file.php" id="current">หน้าหลัก</a></li>
                <li><a href="">ข้อมูลเพิ่มเติม</a></li>
                <li><a href="">เกี่ยวกับ</a></li>
            </ul>
        </aside>
    </header>
    <div id="header">
        <div id="header-inside">
            
            <h1>Young Webmaster Camp 15</h1>
            <br/>
            <h1 id="topic">Semi-Final&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Round</h1>
        </div>
    </div>

    <!--Content-->
    <div id="content">
        <div id="search-box">
            <h4>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</h4>
            <input type="search" id="nameInput" placeholder="ค้นหาชื่อ . ." required>
            <input type="button" id="search" onclick="searchName()" value="ค้นหา">
            <input type="button" id="clear" onclick="clearName()" value="ล้างข้อมูล">
            <div id="search-result">
                <span id="search-result-text"></span>
            </div>
        </div>
        <div id="major">
            <div class="major-box">
                <div class="major-box-image" onclick="ctShow()">
                    <img src="img/wct.png" width="100%" height="100%" id="ct"></img>
                </div>
                <div class="major-box-text" id="ct-text">
                    <h3 id="ct-text-inside">web content</h3>
                </div>
            </div>
            <div class="major-box">
                <div class="major-box-image" onclick="dsShow()">
                    <img src="img/wds.png" width="100%" height="100%" id="ds"></img>
                </div>
                <div class="major-box-text" id="ds-text">
                    <h3 id="ds-text-inside">web design</h3>
                </div>
            </div>
            <div class="major-box">
                <div class="major-box-image" onclick="mkShow()">
                    <img src="img/wmk1.png" width="100%" height="100%" id="mk"></img>
                </div>
                <div class="major-box-text" id="mk-text">
                    <h3 id="mk-text-inside">web marketing</h3>
                </div>
            </div>
            <div class="major-box">
                <div class="major-box-image" onclick="pgShow()">
                    <img src="img/wpg.png" width="100%" height="100%" id="pg"></img>
                </div>
                <div class="major-box-text" id="pg-text">
                    <h3 id="pg-text-inside">web programming</h3>
                </div>
            </div>
        </div>
        <div id="list-box">
            <div id="list-box-morning">
                <div id="list-box-morning-header">
                    <h2>รายชื่อสัมภาษณ์ช่วงเช้า</h2>
                </div>
                <div id="list-box-morning-content">
                    <span id="list-name-morning"></span>
                </div>
            </div>
            <div id="list-box-afternoon">
                <div id="list-box-afternoon-header">
                    <h2>รายชื่อสัมภาษณ์ช่วงบ่าย</h2>
                </div>
                <div id="list-box-afternoon-content">
                    <span id="list-name-afternoon"></span>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <ul class = "social">
			<li><a href = "https://www.facebook.com" target = "_blank"><i class = "fa fa-facebook"></i></a></li>
            <li><a href = "https://www.google.com" target = "_blank"><i class = "fa fa-google-plus"></i></a></li>
            <li><a href = "https://www.youtube.com" target = "_blank"><i class = "fa fa-youtube"></i></a></li>
		</ul>
    </footer>
    <script>
        var data = <?php echo json_encode($homepage); ?>;
    </script>
    <script src="script9.js"></script>
    
</body>
</html>