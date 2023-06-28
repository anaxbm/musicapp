import uuid4 from "uuid4";

function myMusic() {
  return [
    {
      name: "Sea Music",
      cover:
        "https://i.pinimg.com/originals/56/10/b2/5610b24a4385d88857e1ee3bdbc52c09.jpg",
      artist: "chillmore",
      audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_1c2904a3d8.mp3",
      color: ["#FFDCA2", "#7D5B4E"],
      id: uuid4(),
      active: true,
    },
    {
      name: "Sea Breeze",
      cover:
        "https://i.pinimg.com/originals/56/10/b2/5610b24a4385d88857e1ee3bdbc52c09.jpg",
      artist: "chillmore",
      audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_f1f5f44ce6.mp3",
      color: ["#FFDCA2", "#7D5B4E"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Sea Whisper",
      cover:
        "https://i.pinimg.com/originals/56/10/b2/5610b24a4385d88857e1ee3bdbc52c09.jpg",
      artist: "chillmore",
      audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_8e31794a08.mp3",
      color: ["#FFDCA2", "#7D5B4E"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Deep Sea",
      cover:
        "https://i.pinimg.com/originals/56/10/b2/5610b24a4385d88857e1ee3bdbc52c09.jpg",
      artist: "chillmore",
      audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_6b2eb42173.mp3",
      color: ["#FFDCA2", "#7D5B4E"],
      id: uuid4(),
      active: false,
    },
    {
      name: "Calm Sea",
      cover:
        "https://i.pinimg.com/originals/56/10/b2/5610b24a4385d88857e1ee3bdbc52c09.jpg",
      artist: "chillmore",
      audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_7df6c87051.mp3",
      color: ["#FFDCA2", "#7D5B4E"],
      id: uuid4(),
      active: false,
    },
  ];
}

export default myMusic;
