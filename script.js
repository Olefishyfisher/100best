let currentAlbumIndex = 0;

function createAlbumElement(album) {
    const albumDiv = document.createElement('div');
    albumDiv.classList.add('album');

    const img = document.createElement('img');
    img.src = album.image;
    img.alt = album.title;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const rankDiv = document.createElement('div');
    rankDiv.classList.add('rank');
    rankDiv.textContent = album.rank;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = album.title;

    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artist');
    artistDiv.textContent = album.artist;

    infoDiv.appendChild(rankDiv);
    infoDiv.appendChild(titleDiv);
    infoDiv.appendChild(artistDiv);

    albumDiv.appendChild(img);
    albumDiv.appendChild(infoDiv);

    return albumDiv;
}

function showAlbum(index) {
    const albumsContainer = document.querySelector('.albums-container');
    albumsContainer.innerHTML = '';
    const albumElement = createAlbumElement(albums[index]);
    albumElement.classList.add('active');
    albumsContainer.appendChild(albumElement);
}

function nextAlbum() {
    currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
    showAlbum(currentAlbumIndex);
}

function prevAlbum() {
    currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
    showAlbum(currentAlbumIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showAlbum(currentAlbumIndex);
});
