export const blur = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export const blurUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export const expand = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const expandVertical = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const skewIn = {
  hidden: { opacity: 0, skewX: -20 },
  visible: { opacity: 1, skewX: 0, transition: { duration: 0.6, ease: "easeOut" } },
};