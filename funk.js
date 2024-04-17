let stickyFooter = document.querySelector('.sticky-footer');

// Функция для добавления класса при прокрутке страницы
function handleScroll() {
    if (window.scrollY > 100) { // Здесь укажите позицию, при которой плашка должна появиться
        stickyFooter.classList.add('show');
    } else {
        stickyFooter.classList.remove('show');
    }
}



// Слушаем событие прокрутки страницы
window.addEventListener('scroll', handleScroll);

// Нижняя плашка



const btNews = document.getElementById("buttonNews")
const blockNews = document.getElementById("blockNews")


btNews.onclick = function (){

    blockNews.insertAdjacentElement('beforeend',
            btNews.innerHTML = `<div class="newsPost">

    <div class="profile-image">
        <img src="../ikons/news/profile.png" alt="Изображение профиля">
    </div>

    <div class="content">
        <h3>Заголовок</h3>
        <p>Класс пользователя</p>
        <p>Описание</p>

    </div>

    <div class="block-post-top-right">
        <img src="../ikons/news/procheePost.png" alt="Изображение прочее" class="prochee-image">
        <img src="../ikons/news/citirovat.png" alt="Изображение цитировать" class="citirovat-image">
    </div>

<!--    <div class="main-image">-->
<!--        <img src="../ikons/Frame 1.png" alt="Изображение контента">-->
<!--    </div>-->
    <div class="estimation">
        <div class="likes">
            <img src="../ikons/news/likes.png" alt="Лайк" class="like">
            <p>0</p>
        </div>
        <div class="comments">
            <img src="../ikons/news/chats.png" alt="Комментарий" class="comments">
            <p>0</p>
        </div>
        <div class="favourites">
            <img src="../ikons/news/favorite.png" alt="Избранное" class="favorites">
        </div>
    </div>
    <p class="data"></p>

</div>`)
}