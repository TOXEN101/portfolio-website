let samplesThumbId = document.querySelectorAll('[data-topic-id]')
let transparent = document.getElementById('transparent')

samplesThumbId.forEach((sampleThumb => {
    sampleThumb.addEventListener('click', () => {
        let topicId = sampleThumb.dataset.topicId;
        window.open(`${topicId}.html`, 'blank')
    })
    sampleThumb.addEventListener('hover', () => {
        let topicId = sampleThumb.dataset.topicId;
        console.log(topicId)
    })
}))

let scrollBtn = document.getElementById('scrollBtn');
document.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        scrollBtn.classList.add("active")
    }
    else if (window.scrollY >= -50) {
        scrollBtn.classList.remove("active")
    }
})
scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    document.body.style.scrollBehavior = 'smooth';
})

let hamburgerMenu = document.querySelector('#hamburgerMenu');
let hamburgerMenuIcon = document.querySelector('#hamburgerMenuIcon')
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('active')
    transparent.classList.add('active')
})

transparent.addEventListener('click', () => {
    transparent.classList.remove('active')
    hamburgerMenu.classList.remove('active')
})
// let videoThumbs = document.querySelectorAll('.videoThumbs')
// videoThumbs.forEach((videoThumb) => {
//     videoThumb.addEventListener("click", () => {
//         let videoName = videoThumb.dataset.videoName;
//         let video = document.getElementById(`${videoName}`)
//         video.classList.add('active')
//         transparent.classList.add("active")

//         transparent.addEventListener('click', () => {
//             transparent.classList.remove('active')
//             video.classList.remove('active')
//             pauseVideo();
//         })
//     });
// })

// let videoThumbs = document.querySelectorAll('.videoThumbs');

// videoThumbs.forEach((videoThumb) => {
//     videoThumb.addEventListener("click", () => {
//         let videoName = videoThumb.dataset.videoName;
//         let video = document.getElementById(`${videoName}`);
//         video.classList.add('active');
//         transparent.classList.add("active");
//         let originalSrc = video.src; // Store original src in a data attribute
//         video.src = `${originalSrc}&autoplay=1`;


//         // transparent.addEventListener('click', () => {
//         //     transparent.classList.remove('active');
//         //     video.classList.remove('active');
//         //     pauseVideo(videoName); // Pause the video
//         // }, { once: true }); // Ensures the event runs only once
//         transparent.onclick = () => {
//             transparent.classList.remove('active');
//             video.classList.remove('active');
//             pauseVideo(videoName); // Pause the video
//         }; // Ensures the event runs only once
//     });
// });

// // Function to pause the video using YouTube API
// function pauseVideo(videoId) {
//     let iframe = document.getElementById(videoId);
//     iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
// }

let videoThumbs = document.querySelectorAll('.videoThumbs');
// let transparent = document.getElementById('transparent'); // Make sure this exists in your HTML

videoThumbs.forEach((videoThumb) => {
    videoThumb.addEventListener("click", () => {
        let videoName = videoThumb.dataset.videoName;
        let video = document.getElementById(videoName);

        if (!video) {
            console.error(`No iframe found with ID: ${videoName}`);
            return;
        }

        // Hide all iframes before showing the selected one
        document.querySelectorAll(".iframes iframe").forEach(iframe => {
            iframe.classList.remove("active");
        });

        // Show the selected video
        video.classList.add('active');
        transparent.classList.add("active");

        // Autoplay the video
        let originalSrc = video.dataset.src || video.src;
        video.src = `${originalSrc}&autoplay=1`;

        // Remove any previous event listener and add a new one
        transparent.onclick = () => {
            transparent.classList.remove('active');
            video.classList.remove('active');
            pauseVideo(videoName);
        };
    });
});

// Function to pause video using YouTube API
function pauseVideo(videoId) {
    let iframe = document.getElementById(videoId);
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}
