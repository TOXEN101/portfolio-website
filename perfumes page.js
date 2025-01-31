const topics = {
    perfumes: 70,
    cosmetics: 4,
    jewelrys: 9,
    food: 9,
    portraits: 18,
    electronics: 24,
    logos: 3,
    fashion: 5,
    designs: 11,
}

let getTopicId = document.getElementById("topic-id");
let topicId = getTopicId.dataset.topicId;
let workSampleDiv = document.getElementById('work-sample-div')
for (let i = 1; i <= topics[topicId]; i++) {
    let perfumeImg = document.createElement('img')
    perfumeImg.src = `assets new/${topicId}/${topicId} (${i}).jpg`;
    perfumeImg.setAttribute('loading', 'lazy');
    workSampleDiv.appendChild(perfumeImg)
    console.log('ji')

}