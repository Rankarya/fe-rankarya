import ProfileCard from "../components/profile-card";

export default function Result() {
  const data = [{ nama: "Creator 1" }, { nama: "Ariel" }];

  return (
    <div className="flex justify-center gap-4">
      {data.map((item, index) => (
        <ProfileCard key={index} data={item} />
      ))}
    </div>
  );
}
