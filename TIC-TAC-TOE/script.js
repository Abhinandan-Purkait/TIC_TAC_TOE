var cnt = 1;
var player1, player2;
var i = 0,
    j = 0,
    k = 1,
    x = 0,
    l = 0,
    score1 = 0,
    score2 = 0;
var mylist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var mylist1 = [0, 0, 0, 0, 0];
var mylist2 = [0, 0, 0, 0];
var flag = false;

function canceler() {
    var e = document.getElementById('gameholder');
    e.style.display = 'none';

    if (score1 > score2)
        document.getElementById("oncancel").innerHTML = player1 + " WON !! CONGRATULATIONS";
    else if(score1 < score2)
        document.getElementById("oncancel").innerHTML = player2 + " WON !! CONGRATULATIONS";
    else
        document.getElementById("oncancel").innerHTML = " LOL !! GAME DRAWN";
}

function reloader() {
    location.reload();
}

function reset() {
    var c;
    cnt = 0;
    i = j = x = l = 0;
    k = 1;
    mylist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    mylist1 = [0, 0, 0, 0, 0];
    mylist2 = [0, 0, 0, 0];
    flag = false;
    for (c = 1; c <= 9; c++) {
        document.getElementById(c.toString()).value = ".";
        document.getElementById(c.toString()).disabled = false;
    }
    var e = document.getElementById('demo');
    if (e.style.display == 'block')
        e.style.display = 'none';

    var f = document.getElementById('demo1');
    if (f.style.display == 'block')
        f.style.display = 'none';
}

function foo() {
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value;
}

function toggle_visibility(id, id1) {
    var e = document.getElementById(id);
    var f = document.getElementById(id1);
    if (e.style.display == 'none')
        e.style.display = 'block';
    else
        e.style.display = 'none';

    if (f.style.display == 'block')
        f.style.display = 'none';
    else
        f.style.display = 'block';
}

function contains1(x, y, z) {
    var c, count = 0;
    for (c = 0; c < 5; c++) {
        if (mylist1[c] == x || mylist1[c] == y || mylist1[c] == z)
            count++;
    }
    if (count == 3)
        return 1;
    else
        return 0;
}

function contains2(x, y, z) {
    var c, count = 0;
    for (c = 0; c < 5; c++) {
        if (mylist2[c] == x || mylist2[c] == y || mylist2[c] == z)
            count++;
    }
    if (count == 3)
        return 1;
    else
        return 0;
}

function contains3(x) {
    var c, count = 0;
    for (c = 0; c < 9; c++) {
        if (mylist[c] == x)
            return 1;
    }
    return 0;
}

function player(x) {
    mylist[l++] = x;
    if (cnt > 9 || flag == true) {
        var f = document.getElementById('demo1');
        f.style.display = 'block';
        document.getElementById("demo1").innerHTML = "GAME OVER, HO GAYA ! HO GAYA ! BAS !";
        return;
    }
    if (cnt % 2 == 0) {
        mylist2[i] = x;
        if (contains3(x) == 1)
            document.getElementById(x.toString()).value = "O";
        i++;
    } else {
        mylist1[j] = x;
        if (contains3(x) == 1)
            document.getElementById(x.toString()).value = "X";
        j++;
    }
    if (contains1(1, 2, 3) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(4, 5, 6) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(7, 8, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(1, 4, 7) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(2, 5, 8) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(3, 6, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(1, 5, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    } else if (contains1(3, 5, 7) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score1++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2;
    }
    //player 2
    else if (contains2(1, 2, 3) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(4, 5, 6) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(7, 8, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(1, 4, 7) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(2, 5, 8) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(3, 6, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(1, 5, 9) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else if (contains2(3, 5, 7) == 1) {
        var e = document.getElementById('demo');
        if (e.style.display == 'block') e.style.display = 'none';
        else e.style.display = 'block';
        document.getElementById("demo").innerHTML = player1 + " WON, AB NACHO BC";
        score2++;
        flag = true;
        document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
        document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
    } else {
        if (cnt >= 9) {
            var e = document.getElementById('demo');
            if (e.style.display == 'block') e.style.display = 'none';
            else e.style.display = 'block';
            document.getElementById("demo").innerHTML = "GAME DRAWN, TUM LOG KA KUCH NI HO SAKTA";
            score2++;
            score1++;
            flag = true;
            document.getElementById("playerscore1").innerHTML = player1 + " : " + score1;
            document.getElementById("playerscore2").innerHTML = player2 + " : " + score2
        }
    }
    cnt++;
}