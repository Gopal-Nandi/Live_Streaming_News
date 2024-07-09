const langContainer = document.getElementById("lang-page-container");

const bengChannelContainer = document.getElementById("beng-channel-container");
const hindChannelContainer = document.getElementById("hind-channel-container");
const engChannelContainer = document.getElementById("eng-channel-container");

const bengChannel = document.getElementById("bengali-channel");
const hindChannel = document.getElementById("hindi-channel");
const engChannel = document.getElementById("english-channel");

const dropbtn = document.getElementById("dropbtn");

bengChannel.addEventListener('click', () => {
        // langContainer.classList.add('display');
        bengChannelContainer.classList.remove('display');
        hindChannelContainer.classList.add('display');
        engChannelContainer.classList.add('display');

        dropbtn.innerHTML = "বাংলা";
    });

hindChannel.addEventListener('click', () => {
    // langContainer.classList.add('display');
        bengChannelContainer.classList.add('display');
        hindChannelContainer.classList.remove('display');
        engChannelContainer.classList.add('display');

        dropbtn.innerHTML = "हिंदी";
});

engChannel.addEventListener('click', () => {
    // langContainer.classList.add('display');
        bengChannelContainer.classList.add('display');
        hindChannelContainer.classList.add('display');
        engChannelContainer.classList.remove('display');

        dropbtn.innerHTML = "English";
});