var b = 2;

function affiche() {
    var inject = document.getElementById('coucou');
    a = b++;
    coucou.innerHTML += "<span>a=b++</br> a= " + a + ' b=' + b + "</span><br/><br/>";
    b = 2;
    a = ++b;
    coucou.innerHTML += "<span>a=++b</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = b--;
    coucou.innerHTML += "<span>a=b--</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = --b;
    coucou.innerHTML += "<span>a=--b</br> a= " + a + ' b=' + b + "</span><br/><br/>";


    b = 2;
    a += b++;
    coucou.innerHTML += "<span>a+=b++</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = 1;
    a += ++b;
    coucou.innerHTML += "<span>a=1; a+=++b;</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = 1;
    a -= b++;
    coucou.innerHTML += "<span>a=1; a-=b++</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = 1;
    a -= ++b;
    coucou.innerHTML += "<span>a=1; a-=++b</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = 1;
    a += b--;
    coucou.innerHTML += "<span>a=1; a+=b--</br> a= " + a + ' b=' + b + "</span><br/><br/>";

    b = 2;
    a = 1;
    a += --b;
    coucou.innerHTML += "<span>a=1; a+=--b</br> a= " + a + ' b=' + b + "</span><br/><br/>";
}