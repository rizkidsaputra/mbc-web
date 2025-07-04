import DivisionLayout from "../../components/DivisionLayout";

export default function Gametech() {
  return (
    <DivisionLayout
      title="Game Tech"
      description="Divisi Game Tech berfokus pada riset dan pengembangan teknologi, desain visual, audio, serta simulasi interaktif dalam industri game. Dengan menggabungkan kreativitas dan keterampilan teknis, divisi ini mendorong inovasi dalam proses pembuatan game melalui penguasaan berbagai alat produksi seperti Unity, Aseprite, FL Studio, dan lainnya. Di sinilah seni, teknologi, dan imajinasi bertemu untuk menciptakan pengalaman bermain yang imersif dan berdampak."
      image="/assets/GAMETECH.png"
      careers={[
        "Animator (2D/3D)",
        "Game Designer",
        "Artist (2D/3D)",
        "Audio Designer",
        "Game Programmer",
      ]}
      tools={[
        "/assets/tools/vscode.png",
        "/assets/tools/github.png",
        "/assets/tools/unity.png",
        "/assets/tools/aseprite.webp",
        "/assets/tools/flStudio.png",
        "/assets/tools/illustrator.png",
        "/assets/tools/procreate.png",
        "/assets/tools/bandlab.png",
        "/assets/tools/clipstudio.png",
      ]}
    />
  );
}