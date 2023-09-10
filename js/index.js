function showFeature(tabname) {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.classList.add('hidden');
    });

    const selectedFeature = document.getElementById(tabname);
    if (selectedFeature) {
        selectedFeature.classList.remove('hidden');
        document.querySelector('.sidebar').classList.toggle('open');
    }
}

function addClickHandlers() {
    document.querySelectorAll('ul.feature-list li').forEach((li) => {
        li.addEventListener('click', () => {
            showFeature(li.getAttribute('name'));
        });
    });
}

function initHandler() {
    if (window.location.href.startsWith('http')) {
        document.querySelector('.title-main').innerHTML = document.title;
    }

    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}


initHandler();

addClickHandlers();