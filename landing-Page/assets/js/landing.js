let videoBtn = document.querySelector(".video_play");

videoBtn.addEventListener("click", () => {
  if (document.getElementsByClassName("videoMenu").length > 0 == true) return;
  /*prevents duplications */
  let closeBtn = '<button class="closeBtn" id="closeBtn"></button>';
  let videoMenu = document.createElement("div");
  videoMenu.classList.add("videoMenu");
  document.body.appendChild(videoMenu);
  let videoMenuContent = document.querySelector(".videoMenu");
  videoMenuContent.innerHTML =
    closeBtn +
    '<iframe src="https://www.youtube.com/embed/BHACKCNDMW8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  document.querySelector("#closeBtn").addEventListener("click", () => {
    document.querySelector(".videoMenu").remove();
  });
});
