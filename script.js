let currentAlbumIndex = 0;

function showAlbum(index) {
    const albums = document.querySelectorAll('.album');
    albums.forEach((album, i) => {
        album.classList.remove('active');
        if (i === index) {
            album.classList.add('active');
        }
    });
}

function nextAlbum() {
    const albums = document.querySelectorAll('.album');
    currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
    showAlbum(currentAlbumIndex);
}

function prevAlbum() {
    const albums = document.querySelectorAll('.album');
    currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
    showAlbum(currentAlbumIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showAlbum(currentAlbumIndex);
});
