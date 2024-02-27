
    // 모바일 햄버거
    const toggleBtn = document.querySelector('.mobile_nav_toggle');
    const menu = document.querySelector('.nav_mobile');
    const hdborder = document.querySelector('header');

    toggleBtn.addEventListener('click', (event) => {
        menu.classList.toggle('active');
        hdborder.classList.toggle('hd_bdr');
        event.currentTarget.classList.toggle('close');
    });

    // nav메뉴 클릭시 색상변경 유지
    document.addEventListener("DOMContentLoaded", function() {
        const $navList = document.querySelectorAll('.nav_list');

        // 이전에 선택한 메뉴 아이템이 로컬 스토리지에 저장되어 있는지 확인
        const selectedItemIndex = localStorage.getItem('selectedItemIndex');
        if (selectedItemIndex !== null) {
            // 저장된 인덱스가 있다면 해당 메뉴 아이템에 'active' 클래스 추가
            $navList[selectedItemIndex].classList.add('active');
        }

        $navList.forEach(function(item, index) {
            item.addEventListener('click', function() {
                // 모든 메뉴 아이템에서 'active' 클래스 제거
                $navList.forEach(function(navList) {
                    navList.classList.remove('active');
                });

                // 클릭한 메뉴 아이템에 'active' 클래스 추가
                this.classList.add('active');

                // 클릭한 메뉴 아이템의 인덱스를 로컬 스토리지에 저장
                localStorage.setItem('selectedItemIndex', index.toString());
            });
        });
    });