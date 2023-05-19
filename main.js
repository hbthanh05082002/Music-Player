/* 
1. Render songs
2. Scroll top
3. Play / Pause / Seek
4. CD rotate
5. Next / Previous
6. Random
7. Next / Repeat when ended
8. Active song
9. Scroll active song into view
10. Play song when click
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const songs = [
    {
        name: 'Gửi Anh Xa Nhớ',
        singer: 'Bích Phương',
        path: './assets/music/song1.mp3',
        image: './assets/img/song1.jpg',
    },
    {
        name: 'Ánh Nắng Của Anh',
        singer: 'Đức Phúc',
        path: './assets/music/song2.mp3',
        image: './assets/img/song2.jpeg',
    },
    {
        name: 'Hết Thương Cạn Nhớ',
        singer: 'Đức Phúc',
        path: './assets/music/song3.mp3',
        image: './assets/img/song3.jpg',
    },
    {
        name: 'Hôm Nay Tôi Buồn',
        singer: 'Phùng Khánh Linh',
        path: './assets/music/song4.mp3',
        image: './assets/img/song4.jpg',
    },
    {
        name: '1 Phút',
        singer: 'Andiez',
        path: './assets/music/song5.mp3',
        image: './assets/img/song5.jpg',
    },
    {
        name: 'Bông Hoa Đẹp Nhất',
        singer: 'Quân A.P',
        path: './assets/music/song6.mp3',
        image: './assets/img/song6.webp',
    },
    {
        name: 'Phượng Buồn',
        singer: 'H2K, Quốc Lượng ',
        path: './assets/music/song7.mp3',
        image: './assets/img/song7.jpg',
    },
    {
        name: 'Thịnh Vượng Việt Nam Sáng Ngời',
        singer: 'Bùi Trường Linh',
        path: './assets/music/song8.mp3',
        image: './assets/img/song8.jpg',
    },
    {
        name: 'Đồi Hoa Mặt Trời',
        singer: 'Hoàng Yến Chibi',
        path: './assets/music/song9.mp3',
        image: './assets/img/song9.webp',
    },
    {
        name: 'Hơn cả yêu',
        singer: 'Bích Phương',
        path: './assets/music/song10.mp3',
        image: './assets/img/song10.jpg',
    },
    {
        name: '羽肿 - Windy Hill',
        singer: '羽肿',
        path: './assets/music/song11.mp3',
        image: './assets/img/song11.jpg',
    },
    {
        name: 'Hẹn Ước Từ Hư Vô',
        singer: 'Mỹ Tâm',
        path: './assets/music/song12.mp3',
        image: './assets/img/song12.jpg',
    },
    {
        name: 'Huế Và Em',
        singer: 'Hà Thu',
        path: './assets/music/song13.mp3',
        image: './assets/img/song13.jpg',
    },
    {
        name: 'Để Mị Nói Cho Mà Nghe',
        singer: 'Hoàng Thùy Linh',
        path: './assets/music/song14.mp3',
        image: './assets/img/song14.jpg',
    },
    {
        name: 'Khi nào',
        singer: 'Châu Dương',
        path: './assets/music/song15.mp3',
        image: './assets/img/song15.jpg',
    },
    {
        name: 'Tình Hồng Như Mơ',
        singer: 'Cẩm Ly, Đan Trường',
        path: './assets/music/song16.mp3',
        image: './assets/img/song16.jpg',
    },
    {
        name: 'Đại Ngư (Đại Ngư Hải Đường OST)',
        singer: 'Chu Thâm',
        path: './assets/music/song17.mp3',
        image: './assets/img/song17.jpg',
    },
    {
        name: "Merry Go Round Of Life (Howl's Moving Castle OST)",
        singer: 'Joe Hasaishi',
        path: './assets/music/song18.mp3',
        image: './assets/img/song18.jpg',
    },
    {
        name: 'Beautiful In White',
        singer: 'Shane Filan',
        path: './assets/music/song19.mp3',
        image: './assets/img/song19.jpg',
    },
    {
        name: 'Still Together',
        singer: 'Bright Vachirawit, Win Metawin',
        path: './assets/music/song20.mp3',
        image: './assets/img/song20.jpg',
    },
    {
        name: 'Cô Đôi Thượng Ngàn',
        singer: 'Nguyễn Thiện Nhân',
        path: './assets/music/song21.mp3',
        image: './assets/img/song21.jpg',
    },
    {
        name: 'Mộng Chiều Xuân (Thu Thanh 1975)',
        singer: 'Lệ Thu',
        path: './assets/music/song22.mp3',
        image: './assets/img/song22.jpg',
    },
    {
        name: 'Biển Tình (Thu Thanh 1975)',
        singer: 'Thanh Tuyền',
        path: './assets/music/song23.mp3',
        image: './assets/img/song23.jpg',
    },
    {
        name: '上海滩 - Bến Thượng Hải',
        singer: 'Diệp Lệ Nghi',
        path: './assets/music/song24.mp3',
        image: './assets/img/song24.jpg',
    },
    {
        name: 'Sayonara No Natsu (From Up On Poppy Hill OST)',
        singer: 'Teshima Aoi',
        path: './assets/music/song25.mp3',
        image: './assets/img/song25.png',
    },
    {
        name: '【感情を込めて】ハレハレヤ 歌ってみた - Harehare Ya',
        singer: 'Sou',
        path: './assets/music/song26.mp3',
        image: './assets/img/song26.jpg',
    },
];

const cd = $('.cd');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const player = $('.player');
const playBtn = $('.btn.btn-toggle-play');
const songHeadling = $('header h2');
const progress = $('#progress');
const nextBtn = $('.btn.btn-next');
const prevBtn = $('.btn.btn-prev');
const randomBtn = $('.btn.btn-random');
const repeatBtn = $('.btn.btn-repeat');
const playList = $('.playlist');

const app = {
    currentSongIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [...songs],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${
                    this.currentSongIndex === index ? 'active' : ''
                }" data-index = "${index}">
                    <div class="thumb" style="background-image: url('${
                        song.image
                    }')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        });
        playList.innerHTML = htmls.join('\n');
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentSongIndex];
            },
        });
    },
    loadCurrentSong: function () {
        songHeadling.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    nextSong: function () {
        this.currentSongIndex++;
        if (this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex = 0;
        }
        this.loadCurrentSong();
    },
    previousSong: function () {
        this.currentSongIndex--;
        if (this.currentSongIndex < 0) {
            this.currentSongIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    randomSong: function () {
        let newSongIndex;
        do {
            newSongIndex = Math.floor(Math.random() * this.songs.length);
        } while (newSongIndex === this.currentSongIndex);
        this.currentSongIndex = newSongIndex;
        this.loadCurrentSong();
    },
    scrollActivedSongIntoView: function () {
        setTimeout(
            function () {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block:
                        this.currentSongIndex <= this.songs.length / 2
                            ? 'end'
                            : 'start',
                });
            }.bind(this),
            300
        );
    },
    handleEvents: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;
        // CD rotation
        const cdThumbAnimation = cdThumb.animate(
            [
                {
                    transform: 'rotate(360deg)',
                },
            ],
            {
                duration: 10000, // 10s
                iterations: Infinity,
            }
        );
        cdThumbAnimation.pause();
        // Scale the thumb
        document.onscroll = function () {
            const scrollTop =
                document.documentElement.scrollTop || window.scrollY;
            const newCdWidth = cdWidth - scrollTop;
            // console.log(newCdWidth);
            cd.style.width = (newCdWidth > 0 ? newCdWidth : 0) + 'px';
            cd.style.opacity = newCdWidth / cdWidth;
        };
        //
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };
        //
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimation.play();
        };
        //
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimation.pause();
        };
        //
        audio.ontimeupdate = function () {
            if (audio.duration) {
                progress.value = Math.round(
                    (audio.currentTime / audio.duration) * 100
                );
            }
        };
        //
        progress.onchange = function (e) {
            const seekTime = audio.duration * (e.target.value / 100);
            audio.currentTime = seekTime;
        };
        // Next/Prev song with random condition
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollActivedSongIntoView();
        };

        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.previousSong();
            }
            audio.play();
            _this.render();
            _this.scrollActivedSongIntoView();
        };
        // Random btn
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active', _this.isRandom);
        };
        // Repeat btn
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        };
        // Ended progress handler
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };
        // Playlist handler
        playList.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)');
            if (songNode || e.target.closest('.option')) {
                if (e.target.closest('.option')) {
                    // do something
                } else if (songNode) {
                    _this.currentSongIndex = parseInt(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
        };
    },

    start: function () {
        // Lắng nghe và xử lý các event
        this.handleEvents();

        // Định nghĩa các thuộc tính (property)
        this.defineProperties();

        // Tải thông tin bài hát lên UI
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
};

app.start();
