//========= Link variables ====================================================
var links = [
    "https://courses.fit.cvut.cz/BI-AAG/lectures",
    "https://campuscvut-my.sharepoint.com/personal/peckato1_cvut_cz/Documents/AAG/b201/b201-hw.pdf",
    "https://progtest.fit.cvut.cz/index.php?X=Course&Cou=311",
    "https://mail.google.com/mail/u/0/#inbox",
    "https://courses.fit.cvut.cz/BI-AG1/lectures/",
    "https://courses.fit.cvut.cz/BI-AG1/tutorials/prerekvizity/",
    "https://progtest.fit.cvut.cz/index.php?X=Course&Cou=314",
    "https://outlook.office365.com/mail/inbox",
    "https://progtest.fit.cvut.cz/index.php?X=Course&Cou=310",
    "https://timetable.fit.cvut.cz/new/",
    "https://courses.fit.cvut.cz/BI-PYT/",
    "https://open.spotify.com/"
];
var names = [
    "AAG",
    "AAG",
    "AAG",
    "gmail",
    "AG1",
    "AG1",
    "AG1",
    "Outlook",
    "PYT",
    "Timetable",
    "PYT",
    "Spotify"
];
var icons = [
    "📔",
    "📓",
    "💾",
    "📫",
    "📔",
    "📓",
    "💾",
    "📫",
    "💾",
    "📆",
    "🐍",
    "𝄞 "
]
//========= Functions =========================================================

// calculate grid layout for given number of elements
function generateGrid() {
    var linkCount = links.length;
    var rowCount = Math.floor(Math.sqrt(linkCount));

    // find the most equal two numbers a b such that a * b = linkCount
    while (linkCount % rowCount != 0) {
        rowCount--;
    }

    var colCount = linkCount / rowCount;

    // -1 for margin
    //var rowHeight = (((100 - 1) / rowCount).toFixed(4) + "vh ").repeat(rowCount);
    //var colWidth = (((100 - 1) / colCount).toFixed(4) + "vw ").repeat(colCount);
    var rowHeight = ("1fr ").repeat(rowCount);
    var colWidth = ("1fr ").repeat(colCount);

    document.getElementById("wrapper").style.gridTemplateColumns = colWidth;
    document.getElementById("wrapper").style.gridTemplateRows = rowHeight;
}

// Populate wrapper with links from link variables. Format them to grid
function generateLinks() {
    for (var link = 0; link < links.length; link++) {
        // Create container
        var container = document.createElement("a");
        container.className = "address";
        container.title = names[link];
        container.href = links[link];
        container.className = "address";

        //var randomTone = 255 - Math.floor(Math.random() * 70);
        //container.style.backgroundColor = "rgb(" + randomTone + "," + randomTone + "," + randomTone + ")";

        // Create icon
        var icon = document.createElement("div");
        icon.appendChild(document.createTextNode(icons[link]));
        icon.className = "icon";
        icon.className = "logo";

        // Create name
        var niceName = document.createElement("h2");
        niceName.appendChild(document.createTextNode(names[link]));

        // append to container and add container to wrapper
        container.appendChild(icon);
        container.appendChild(niceName);
        document.getElementById("wrapper").appendChild(container);
    }

    var backdrop = document.createElement("div");
    backdrop.id = "backdrop";
    document.getElementById("wrapper").appendChild(backdrop);

    generateGrid();
}

// Retrieve coordinates of element
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        y: (box.top + window.pageYOffset + box.bottom + window.pageYOffset) / 2,
        x: (box.right + window.pageXOffset + box.left + window.pageXOffset) / 2
    };
}

// Calculate distance between cursor and obj
function getDistance(obj, cursorPos) {
    var x = getCoords(obj).x; // - obj.getBoundingClientRect().left;
    var y = getCoords(obj).y; // bottom - obj.getBoundingClientRect().top;
    return Math.hypot(x - cursorPos[0], y - cursorPos[1]);
}

var firstRun = true;

// Changes color of link based on distance from cursor
function updateColors(e) {
    var cursorPos = [e.pageX, e.pageY];
    console.log("Cursor pos: ", cursorPos[0], cursorPos[1]);

    var blockWidth = document.getElementById("backdrop").clientWidth;

    if (firstRun) {
        firstRun = !firstRun;
        return;
    };

    document.getElementById("backdrop").style.opacity = "1";

    document.getElementById("backdrop").style.left = (cursorPos[0] - blockWidth / 2) + "px";
    document.getElementById("backdrop").style.top = (cursorPos[1] - blockWidth / 2) + "px";

    /*return;
    var children = document.getElementById("wrapper").children;
    for (var i = 0; i < children.length; i++) {
        var distance = getDistance(children[i], cursorPos);
        console.log("distance ", i, ": ", distance);
        var randomTone = 255 - (distance * 255 / (Math.hypot(document.documentElement.clientHeight, document.documentElement.clientWidth)));
        children[i].style.backgroundColor = "rgb(" + randomTone + "," + randomTone + "," + randomTone + ")";
    }*/
}

//====== Run on load ===================================================================

generateLinks();

document.addEventListener('mousemove', updateColors, false);
document.addEventListener('mouseenter', updateColors, false);