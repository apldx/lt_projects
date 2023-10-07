export interface Song {
  artist: string | string[];
  length: number;
  name: string;
  type: 'song';
}

export interface Album {
  songs: Song[];
  type: 'album';
}

export interface Playlist {
  resolve: () => Song[];
  type: 'playlist';
}

type Item = Song | Album | Playlist;

export interface Artists {
  [key: string]: string[];
}

export const unrollPlaylist = (items: Item[]) => {
  const artists: Artists = {};
  const songs: string[] = [];
  let time = 0;

  const addSong = (song: Song) => {
    const songArtists =
      typeof song.artist === 'string' ? [song.artist] : song.artist;
    for (const artist of songArtists) {
      artists[artist] === undefined
        ? (artists[artist] = [song.name])
        : artists[artist].push(song.name);
    }
    songs.push(song.name);
    time += song.length;
  };

  for (const item of items) {
    switch (item.type) {
      case 'song':
        addSong(item);
        break;
      case 'album':
        for (const song of item.songs) {
          addSong(song);
        }
        break;
      case 'playlist':
        for (const song of item.resolve()) {
          addSong(song);
        }
        break;
    }
  }

  return {
    artists,
    songs,
    time
  };
};
