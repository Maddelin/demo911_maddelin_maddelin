// function displayHikeInformation() {
//     //retrieve the document id from the url
//     let params = new URL(window.location.href) //get the url from the searbar
//     let ID = params.searchParams.get("docID");
//     console.log(ID);

//     db.collection("hikes").doc(ID).get().then(thisHike => {
//         hikeInfo = thisHike.data();
//         hikeCode = hikeInfo.code;
//         hikeName = hikeInfo.name;

//         document.getElementById("hikeName").innerHTML = hikeName;
//         let imgEvent = document.querySelector(".hike-img");
//         imgEvent.src = "../images/" + hikeCode + ".jpg";
//     })
// }
// displayHikeInformation();

function displayHikeInfo() {
    //retrieve the document id from the url
    let params = new URL(window.location.href); //get URL of search bar
    let ID = params.searchParams.get("docID"); //get value for key "id"
    console.log(ID);

    // doublecheck: is your collection called "Reviews" or "reviews"?
    db.collection("hikes")
        .doc(ID)
        .get()
        .then(doc => {
            thisHike = doc.data();
            hikeCode = thisHike.code;
            hikeName = doc.data().name;

            // only populate title, and image
            document.getElementById("hikeName").innerHTML = hikeName;
            let imgEvent = document.querySelector(".hike-img");
            imgEvent.src = "../images/" + hikeCode + ".jpg";
        });
}
displayHikeInfo();