import { GoogleSignIn, AuthState, googleSignOut } from './firebase.js'
document.addEventListener("DOMContentLoaded", function() {
    
    // your code here
    let iframe = [
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=148" width="626" height="389" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 2"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=149" width="831" height="418" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 3"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=147" width="831" height="371" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 1"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=150" width="831" height="353" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 4"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=151" width="831" height="371" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 5"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=152" width="831" height="389" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 6"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=153" width="831" height="371" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 7"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=154" width="831" height="371" frameborder="0" allowfullscreen="allowfullscreen" title="Cognitive Development in Childhood Check Knowledge 8"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=211" width="831" height="422" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge 1"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=212" width="831" height="350" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge 2"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=213" width="831" height="368" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge 3"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=214" width="831" height="368" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge 4"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=215" width="831" height="368" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=216" width="831" height="368" frameborder="0" allowfullscreen="allowfullscreen" title="Drive States Check Knowledge 6"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=217" width="831" height="207" frameborder="0" allowfullscreen="allowfullscreen" title="Emotion Experience and Well-Being Check Knowledge 1"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=218" width="831" height="243" frameborder="0" allowfullscreen="allowfullscreen" title="Emotion Experience and Well-Being Check Knowledge 2"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=219" width="831" height="203" frameborder="0" allowfullscreen="allowfullscreen" title="Emotion Experience and Well-Being Check Knowledge 3"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=220" width="831" height="175" frameborder="0" allowfullscreen="allowfullscreen" title="Affective Neuroscience Check Knowledge 1"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=221" width="831" height="175" frameborder="0" allowfullscreen="allowfullscreen" title="Affective Neuroscience Check Knowledge 2"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=222" width="831" height="225" frameborder="0" allowfullscreen="allowfullscreen" title="Affective Neuroscience Check Knowledge 3"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    `<iframe src="https://ecampusontario.pressbooks.pub/testbookje/wp-admin/admin-ajax.php?action=h5p_embed&id=268" width="831" height="306" frameborder="0" allowfullscreen="allowfullscreen" title="Affective Neuroscience Check Knowledge 4"></iframe><script src="https://ecampusontario.pressbooks.pub/app/plugins/h5p/h5p-php-library/js/h5p-resizer.js" charset="UTF-8"></script>`,
    ]
    
    const button1 = document.getElementById("button1");
    const div1 = document.getElementById("Div1");
    let next = document.getElementById("next");
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];

        if (listOfPastQuestions.length == arr.length){
            return 'You attempted all questions!!';
            }
        else if (item in listOfPastQuestions) {
            getRandomItem(arr);
        }
        else{
            listOfPastQuestions.push(item)
            delete arr[randomIndex];
            return item;
        }
    }

    let listOfPastQuestions = []

    button1.addEventListener('click', function() {
        div1.innerHTML = getRandomItem(iframe);
    });

    next.addEventListener('click', function() {
        div1.innerHTML = getRandomItem(iframe)
    });



    let logInGoogle = document.getElementById('logInGoogle');

    logInGoogle.addEventListener('click', function() {
        GoogleSignIn();
    });

    const whenSignedIn = document.getElementById('whenSignedIn');
    const whenSignedOut = document.getElementById('whenSignedOut')
    AuthState("whenSignedIn", "whenSignedOut", div1);

    
});

let signOutBtn = document.getElementById('Sign Out');
signOutBtn.addEventListener('click', function(){
    googleSignOut();
})

