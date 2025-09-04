import { useEffect, useRef } from "react";
const InfoTab = ({ onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className="absolute left-12 top-0 bg-black/90 border border-gray-600 rounded-xl shadow-xl p-4 w-96"
      ref={ref}
    >
      <p className="text-center text-white">
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
  );
};

export default InfoTab;
