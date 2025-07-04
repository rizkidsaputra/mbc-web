import DivisionLayout from "../../components/DivisionLayout";

export default function Cybersecurity() {
  return (
    <DivisionLayout
      title="Cyber Security"
      description="Divisi Cyber Security berfokus pada perlindungan sistem dan data digital melalui pengembangan solusi keamanan seperti enkripsi, penetration testing, digital forensic, dan monitoring ancaman siber. Dengan pendekatan praktis dan teknologi mutakhir, divisi ini melatih individu untuk menjadi garda terdepan dalam menjaga integritas, kerahasiaan, dan ketersediaan informasi di era digital yang terus berkembang."
      image="/assets/CS.png"
      careers={[
        "Cybersecurity Analyst",
        "Digital Forensic",
        "SOC Analyst",
        "Penetration Test",
        "Security Engineer",
      ]}
      tools={[
        "/assets/tools/linux.png",
        "/assets/tools/ubuntu.svg",
        "/assets/tools/AWS.png",
        "/assets/tools/docker.png",
        "/assets/tools/cloudflare.png",
      ]}
    />
  );
}