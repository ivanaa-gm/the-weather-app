import { X } from "lucide-react";
import { useEffect, useState } from "react";

const InfoModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-blue-100 max-w-lg w-[90%] p-4 pb-6 rounded-lg shadow-xl gap-2 relative transform transition-all duration-200 ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <X
            size={24}
            className="cursor-pointer hover:opacity-70 transition"
            onClick={handleClose}
          />
        </div>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quo
          magnam enim quam non dicta molestiae sequi animi perferendis. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Rerum ullam
          assumenda sed iste. Obcaecati qui libero earum maiores corrupti unde
          cupiditate incidunt deleniti aut enim, laboriosam culpa pariatur,
          distinctio tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt rerum cum sint numquam nam quas, nulla itaque earum
          architecto maiores eligendi labore voluptatibus consequatur quam
          molestiae neque suscipit dolore saepe.
        </p>
      </div>
    </div>
  );
};

export default InfoModal;
