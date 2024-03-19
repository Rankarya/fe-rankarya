import ProfileCard from "../components/profile-card";

export default function Result() {
  const data = [
    { nama: "Creator 1", description: "Tes 1 2 3" },
    {
      nama: "Ariel",
      description:
        "Creating an independent production company and podcast network",
    },
  ];

  return (
    <div className="flex justify-center gap-4">
      {data.map((item, index) => (
        <ProfileCard key={index} data={item} />
      ))}
    </div>
  );
}
