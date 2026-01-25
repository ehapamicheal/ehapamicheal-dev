export const pulse = {
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const shake = {
  visible: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2
    }
  }
};

export const swing = {
  visible: {
    rotate: [0, 15, -15, 10, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export const wobble = {
  visible: {
    x: [0, -25, 20, -15, 10, 0],
    rotate: [0, -5, 3, -3, 2, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 2
    }
  }
};

export const heartbeat = {
  visible: {
    scale: [1, 1.3, 1, 1.3, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};