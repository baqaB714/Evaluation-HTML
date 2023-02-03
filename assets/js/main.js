window.addEventListener('DOMContentLoaded', (event) => {


    document.getElementById('handle_toggle_sidemenu').addEventListener('change' , function(){
        if (this.checked) {
            document.querySelector('.mini_sidebar').classList.add('expanded')
            document.getElementById('content_section').classList.add('with_sidebar')
        }else{
            document.querySelector('.mini_sidebar').classList.remove('expanded')
            document.getElementById('content_section').classList.remove('with_sidebar')
        }
    })

    let sidebarItms = document.querySelectorAll('.sidebar_menu_item');
    for (const item of sidebarItms) {
        item.addEventListener('click' , ()=>{
            for (const i of sidebarItms) {
                i.classList.remove('active')
            }
            item.classList.add('active')
            let sectionId = item.getAttribute('data-section-id');
            let allSections = document.querySelectorAll('.main_section');
            for (const section of allSections) {
                section.classList.add('d-none')
            }
            console.log(sectionId);
            document.getElementById(`${sectionId}`).classList.remove('d-none')
        })
    }

    // chart-------------->>
    const DATA_COUNT = 13;

    const labels = ['فروردین' , 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند'];

    const datapoints = [90, 80, 85, 93, 87, 95,95, 90, 91, 0,0, 0];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'میانگین امتیاز',
                data: datapoints,
                borderColor: "#0062ff",
                fill: true,
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
                backgroundColor: [
                    // 'rgba(255, 159, 64)',
                    // 'rgba(255, 205, 86)',
                    'rgba(75, 192, 192)',
                    // 'rgba(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    // 'rgba(201, 203, 207)'
                  ],
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'میانگین امتیازات کل نیروهای آب و فاضلاب استان مرکزی',
                },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        // text: 'زمان'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: ''
                    },
                    // suggestedMin: -10,
                    // suggestedMax: 200
                }
            }
        },
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx , config)



    
});

var tooltipEl = document.querySelectorAll('.has_tooltip')
for (const item of tooltipEl) {
    new bootstrap.Tooltip(item, {
        boundary: document.body
    })
}
