export const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const rotateInUpLeft = {
  hidden: { opacity: 0, rotate: -45, x: -50, y: 50 },
  visible: { opacity: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const rotateInUpRight = {
  hidden: { opacity: 0, rotate: 45, x: 50, y: 50 },
  visible: { opacity: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const rotateInDownLeft = {
  hidden: { opacity: 0, rotate: 45, x: -50, y: -50 },
  visible: { opacity: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const rotateInDownRight = {
  hidden: { opacity: 0, rotate: -45, x: 50, y: -50 },
  visible: { opacity: 1, rotate: 0, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};