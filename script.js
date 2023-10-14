let menu = document.getElementById('hb-menu');
        let videos = document.querySelector('.youtube-videos');
        let sidebar = document.querySelector('.sidebar');

        menu.addEventListener('click', function (e) {
            e.preventDefault();

            if (sidebar.classList.contains('slide-menuIn')) {
                sidebar.classList.replace('slide-menuIn', 'slide-menuOut');
                videos.classList.toggle('lg:w-4/5');
            } else {
                sidebar.classList.replace('slide-menuOut', 'slide-menuIn');
                videos.classList.toggle('lg:w-4/5');
            }
        });