import DivisionLayout from "../../components/DivisionLayout";

export default function Bigdata() {
  return (
    <DivisionLayout
      title="Big Data"
      description="Divisi Big Data berfokus pada pengumpulan, pengolahan, dan analisis data dalam skala besar untuk menghasilkan wawasan mendalam yang mendukung pengambilan keputusan strategis. Dengan menggabungkan teknologi seperti machine learning, visualisasi data, dan pemrosesan data terdistribusi, divisi ini membekali individu dengan keterampilan untuk menjawab tantangan kompleks di era informasi berbasis data."
      image="/assets/BD.png"
      careers={[
        "Machine Learning Engineer",
        "Data Scientist",
        "Data Anlayst",
        "Data Engineer",
      ]}
      tools={[
        "/assets/tools/tableau.png",
        "/assets/tools/tensorflow.png",
        "/assets/tools/python.png",
        "/assets/tools/colab.webp",
        "/assets/tools/scikit.png",
      ]}
    />
  );
}