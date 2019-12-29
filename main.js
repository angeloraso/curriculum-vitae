// Incluye htmls de las diferentes secciones
function includeHtml() {
    var includes = document.getElementsByTagName('include');
    var htmls_count = includes.length - 1;
    [].forEach.call(includes, i => {
        var filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
                if ( htmls_count !== 0 ) {
                    htmls_count --;
                } else {
                    activate();
                }
            });
        });
    });
}

includeHtml();

function activate() {
    var DATE_OF_BIRTH = new Date(1993, 6, 5); // 5 de Junio de 1993
    
    var age = document.getElementById('my-age');
    
    age.innerText = calculateAge(DATE_OF_BIRTH);
    
    function calculateAge(date_of_birth) {
        var diff_ms = Date.now() - date_of_birth.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    var current_year = document.getElementById('current-year');
    current_year.innerText = new Date().getUTCFullYear();

    [].forEach.call(document.getElementsByClassName('up-arrow'), item => {
        item.addEventListener('click', () => {
            document.location.href = "#";
        })
    })
}
