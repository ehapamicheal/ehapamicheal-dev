export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomOut = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomInUp = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomInDown = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomInLeft = {
  hidden: { opacity: 0, scale: 0.5, x: 50 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomInRight = {
  hidden: { opacity: 0, scale: 0.5, x: -50 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const zoomCard = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};