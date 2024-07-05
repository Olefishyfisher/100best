body {
    margin: 0;
    padding: 0;
    background-color: #3A1EA0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.container {
    text-align: center;
    color: white;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.header img {
    height: 50px;
    margin-right: 10px;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.carousel {
    display: flex;
    align-items: center;
    position: relative;
}

.albums-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 300px;
    height: 300px;
    position: relative;
}

.album {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.5s, opacity 0.5s;
    transform: scale(0);
    opacity: 0;
}

.album.active {
    transform: scale(1);
    opacity: 1;
}

.album img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.info {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.rank {
    font-size: 48px;
    font-weight: bold;
}

.title {
    font-size: 24px;
    margin-top: 10px;
}

.artist {
    font-size: 18px;
    margin-top: 5px;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    color: white;
    cursor: pointer;
    z-index: 1;
}

.arrow.left {
    left: 20px;
}

.arrow.right {
    right: 20px;
}
