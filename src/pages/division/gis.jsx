import DivisionLayout from "../../components/DivisionLayout";

export default function Gis() {
  return (
    <DivisionLayout
      title="Geographic Information System"
      description="Divisi Geographic Information System (GIS) berfokus pada pemanfaatan teknologi geospasial untuk pemetaan digital, analisis spasial, dan visualisasi data geografi. Dengan mengintegrasikan perangkat seperti QGIS, ArcGIS, dan pemodelan 3D, divisi ini mendukung perencanaan tata ruang, survei wilayah, serta pengembangan aplikasi berbasis lokasi yang inovatif dan berdampak nyata bagi berbagai sektor."
      image="/assets/GIS.png"
      careers={[
        "Spasial Analyst",
        "Penata tata ruangan kota",
        "Surveyor",
        "GIS Specialist",
        "Webgis developer (Startup)",
      ]}
      tools={[
        "/assets/tools/qgis.png",
        "/assets/tools/figma.png",
        "/assets/tools/unity.png",
        "/assets/tools/arcgis.png",
        "/assets/tools/blender.png",
      ]}
    />
  );
}