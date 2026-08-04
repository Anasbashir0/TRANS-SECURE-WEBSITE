import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999]">
      <div
        className="h-full bg-red-600 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;