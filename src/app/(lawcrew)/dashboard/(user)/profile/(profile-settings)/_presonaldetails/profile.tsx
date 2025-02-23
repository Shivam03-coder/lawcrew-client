import { Camera } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState<string | null>("/profile.png");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null); // Set to null when removing the image
  };

  return (
    <div className="inline-flex max-h-[15.5625rem] flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-end gap-[13px]">
        <div className="relative h-[6.5rem] w-[6.5625rem]">
          <div className="absolute left-0 top-0 inline-flex h-[104px] w-[104px] items-center justify-center">
            {image ? (
              <img
                className="h-[104px] w-[104px] rounded-full"
                src={"/blue-bird.jpg"}
                alt="Profile"
              />
            ) : (
              <Camera className="h-[40px] w-[40px] text-gray-400" />
            )}
          </div>
          <div className="absolute bottom-[1.5rem] right-[1.5rem] flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
            <Camera className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <div className="flex flex-col items-start justify-start gap-2">
            <label
              htmlFor="file-input"
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded bg-primary px-5 py-2.5"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Change Photo
                </div>
              </div>
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <button
              className="inline-flex h-10 items-center justify-center gap-2 rounded border border-primary px-5 py-2.5"
              onClick={handleRemoveImage}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-primary">
                  Remove Photo
                </div>
              </div>
            </button>
          </div>
          <div className="text-center font-inter text-xs font-medium text-[#6b737a]">
            Pick up a photo up to 4 MB
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
