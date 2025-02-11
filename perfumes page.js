// const topics = {
//     perfumes: 70,
//     cosmetics: 4,
//     jewelrys: 9,
//     food: 9,
//     portraits: 18,
//     electronics: 24,
//     logos: 3,
//     fashion: 5,
//     designs: 11,
// }

const topics = {
    perfumes: {
        type: "webp",
        number: 70
    },
    cosmetics: {
        type: "jpg",
        number: 4
    },
    jewelrys: {
        type: "jpg",
        number: 9
    },
    food: {
        type: "jpg",
        number: 9
    },
    portraits: {
        type: "jpg",
        number: 18
    },
    electronics: {
        type: "webp",
        number: 24
    },
    logos: {
        type: "jpg",
        number: 3
    },
    fashion: {
        type: "jpg",
        number: 5
    },
    designs: {
        type: "jpg",
        number: 11
    },
}

let getTopicId = document.getElementById("topic-id");
let topicId = getTopicId.dataset.topicId;
let workSampleDiv = document.getElementById('work-sample-div')
for (let i = 1; i <= topics[topicId].number; i++) {
    let perfumeImg = document.createElement('img')
    perfumeImg.src = `assets new/${topicId}/${topicId} (${i}).${topics[topicId].type}`;
    perfumeImg.setAttribute('loading', 'lazy');
    workSampleDiv.appendChild(perfumeImg)

}